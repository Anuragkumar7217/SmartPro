import {
  useCallback,
  useEffect,
  useState,
} from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import quotationService from "../services/quotationService";

function useQuotations() {
  const [rfqs, setRFQs] = useState([]);
  const [quotations, setQuotations] =
    useState([]);
  const [comparison, setComparison] =
    useState(null);

  const [selectedRFQ, setSelectedRFQ] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [actionLoading, setActionLoading] =
    useState(false);

  const [createDrawerOpen, setCreateDrawerOpen] =
    useState(false);

  const [comparisonOpen, setComparisonOpen] =
    useState(false);

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

      const availableRFQs =
        (response.data || []).filter(
          (rfq) =>
            rfq.status === "ISSUED" ||
            rfq.status === "CLOSED"
        );

      setRFQs(availableRFQs);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load RFQs."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  const fetchQuotations =
    useCallback(
      async (rfqId) => {
        try {
          const response =
            await quotationService.getQuotationsByRFQ(
              rfqId
            );

          setQuotations(response.data || []);
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
            await quotationService.getQuotationComparison(
              rfqId
            );

          setComparison(response.data);
        } catch (error) {
          showError(
            error.response?.data?.message ||
              "Failed to load comparison."
          );
        }
      },
      [showError]
    );

  useEffect(() => {
    fetchRFQs();
  }, [fetchRFQs]);

  const selectRFQ = async (rfq) => {
    setSelectedRFQ(rfq);

    await fetchQuotations(rfq._id);
  };

  const openCreateDrawer = () => {
    setCreateDrawerOpen(true);
  };

  const closeCreateDrawer = () => {
    setCreateDrawerOpen(false);
  };

  const openComparison = async () => {
    if (!selectedRFQ) return;

    await fetchComparison(selectedRFQ._id);

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

        showSuccess(response.message);

        await fetchComparison(
          selectedRFQ._id
        );

        await fetchQuotations(
          selectedRFQ._id
        );
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
    rfqs,
    quotations,
    comparison,

    selectedRFQ,

    loading,
    actionLoading,

    createDrawerOpen,
    comparisonOpen,

    snackbar,

    selectRFQ,

    openCreateDrawer,
    closeCreateDrawer,

    openComparison,
    closeComparison,

    createQuotation,
    selectQuotation,

    closeSnackbar,

    refreshRFQs: fetchRFQs,
  };
}

export default useQuotations;