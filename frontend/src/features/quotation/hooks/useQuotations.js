import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import quotationService from "../services/quotationService";

function useQuotations() {
  const [loading, setLoading] = useState(true);

  const [detailLoading, setDetailLoading] =
    useState(false);

  const [actionLoading, setActionLoading] =
    useState(false);

  const [rfqs, setRFQs] = useState([]);

  const [selectedRFQ, setSelectedRFQ] =
    useState(null);

  const [quotations, setQuotations] =
    useState([]);

  const [comparison, setComparison] =
    useState([]);

  const [
    selectedQuotation,
    setSelectedQuotation,
  ] = useState(null);

  const [createDrawerOpen, setCreateDrawerOpen] =
    useState(false);

  const [comparisonOpen, setComparisonOpen] =
    useState(false);

  const [search, setSearch] = useState("");

  const {
    snackbar,
    showSuccess,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchRFQs = useCallback(async () => {
    try {
      setLoading(true);

      const response =
        await quotationService.getRFQs();

      const availableRFQs = (
        response.data || []
      ).filter(
        (rfq) =>
          rfq.status === "ISSUED" ||
          rfq.status === "CLOSED"
      );

      const updatedRFQs = await Promise.all(
        availableRFQs.map(async (rfq) => {
          if (rfq.status !== "CLOSED") {
            return {
              ...rfq,
              quotationCount: 0,
            };
          }

          try {
            const quotationResponse =
              await quotationService.getQuotationsByRFQ(
                rfq._id
              );

            return {
              ...rfq,
              quotationCount: (
                quotationResponse.data || []
              ).length,
            };
          } catch {
            return {
              ...rfq,
              quotationCount: 0,
            };
          }
        })
      );

      setRFQs(updatedRFQs);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load RFQs."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  useEffect(() => {
    fetchRFQs();
  }, [fetchRFQs]);

  const closedRFQs = useMemo(() => {
    return rfqs.filter(
      (rfq) =>
        rfq.status === "CLOSED" &&
        rfq.quotationCount > 0 &&
        (rfq.vendors?.length || 0) > 0
    );
  }, [rfqs]);

  const filteredRFQs = useMemo(() => {
    if (!search) {
      return closedRFQs;
    }

    const value = search.toLowerCase();

    return closedRFQs.filter(
      (rfq) =>
        rfq.rfqNumber
          ?.toLowerCase()
          .includes(value) ||
        rfq.purchaseRequest?.prNumber
          ?.toLowerCase()
          .includes(value)
    );
  }, [closedRFQs, search]);

  const fetchQuotations =
    useCallback(
      async (rfqId) => {
        try {
          const response =
            await quotationService.getQuotationsByRFQ(
              rfqId
            );

          setQuotations(
            response.data || []
          );
        } catch (error) {
          setQuotations([]);

          showError(
            error.response?.data?.message ||
              "Failed to load quotations."
          );
        }
      },
      [showError]
    );

  const fetchComparison =
  useCallback(
    async (rfqId) => {
      try {
        const response =
          await quotationService.getComparison(
            rfqId
          );

        setComparison(
          response.data?.quotations || []
        );
        } catch (error) {
          setComparison([]);

          showError(
            error.response?.data?.message ||
              "Failed to load comparison."
          );
        }
      },
      [showError]
    );

  const selectRFQ = async (rfq) => {
    try {
      setDetailLoading(true);

      const [
        rfqResponse,
        quotationResponse,
        comparisonResponse,
      ] = await Promise.all([
        quotationService.getRFQById(rfq._id),
        quotationService.getQuotationsByRFQ(rfq._id),
        quotationService.getComparison(rfq._id),
      ]);

      setSelectedRFQ(rfqResponse.data);

      setQuotations(
        quotationResponse.data || []
      );

      setComparison(
        comparisonResponse.data?.quotations || []
      );

      setSelectedQuotation(null);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load RFQ details."
      );
    } finally {
      setDetailLoading(false);
    }
  };

  const loadQuotation = async (
    quotationId
  ) => {
    try {
      const response =
        await quotationService.getQuotationById(
          quotationId
        );

      setSelectedQuotation(
        response.data
      );
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load quotation."
      );
    }
  };

  const openCreateDrawer = () => {
    setCreateDrawerOpen(true);
  };

  const closeCreateDrawer = () => {
    setCreateDrawerOpen(false);
  };

  const openComparison = () => {
    setComparisonOpen(true);
  };

  const closeComparison = () => {
    setComparisonOpen(false);
  };

  const createQuotation = async (
    payload
  ) => {
    try {
      setActionLoading(true);

      const response =
        await quotationService.createQuotation(
          payload
        );

      showSuccess(response.message);

      closeCreateDrawer();

      await fetchQuotations(
        payload.rfq
      );

      await fetchRFQs();
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to create quotation."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const selectQuotation =
    async (quotationId) => {
      try {
        setActionLoading(true);

        const response =
          await quotationService.selectQuotation(
            quotationId
          );

        showSuccess(
          response.message
        );

        if (selectedRFQ) {
          await Promise.all([
            fetchComparison(
              selectedRFQ._id
            ),
            fetchQuotations(
              selectedRFQ._id
            ),
            fetchRFQs(),
          ]);
        }
      } catch (error) {
        showError(
          error.response?.data?.message ||
            "Failed to select quotation."
        );
      } finally {
        setActionLoading(false);
      }
    };

  return {
    loading,
    detailLoading,
    actionLoading,

    rfqs,
    closedRFQs,
    filteredRFQs,

    quotations,
    comparison,

    selectedRFQ,
    selectedQuotation,

    createDrawerOpen,
    comparisonOpen,

    search,
    setSearch,

    selectRFQ,
    loadQuotation,

    openCreateDrawer,
    closeCreateDrawer,

    openComparison,
    closeComparison,

    createQuotation,
    selectQuotation,

    refreshRFQs: fetchRFQs,

    snackbar,
    closeSnackbar,
  };
}

export default useQuotations;