import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import rfqService from "../services/rfqService";
import quotationService from "../../quotation/services/quotationService";

function useRFQs() {
  const [loading, setLoading] = useState(true);

  const [rfqs, setRFQs] = useState([]);

  const [selectedRFQ, setSelectedRFQ] =
    useState(null);

  const [quotations, setQuotations] =
    useState([]);

  const [
    quotationDrawerOpen,
    setQuotationDrawerOpen,
  ] = useState(false);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [detailLoading, setDetailLoading] =
    useState(false);

  const [actionLoading, setActionLoading] =
    useState(false);

  const {
    snackbar,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchRFQs = useCallback(async () => {
    try {
      setLoading(true);

      const response =
        await rfqService.getRFQs();

      setRFQs(response.data || []);
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

  const filteredRFQs = useMemo(() => {
    return rfqs
      .filter((rfq) => rfq.status !== "CLOSED")
      .filter((rfq) => {
        const matchesSearch =
          !search ||
          rfq.rfqNumber
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
          !status ||
          rfq.status === status;

        return matchesSearch && matchesStatus;
      });
  }, [rfqs, search, status]);

  const selectRFQ = async (rfq) => {
    try {
      setDetailLoading(true);

      const response =
        await rfqService.getRFQById(rfq._id);

      setSelectedRFQ(response.data);

      const quotationResponse =
        await quotationService.getQuotationsByRFQ(
          rfq._id
        );

      setQuotations(
        quotationResponse.data || []
      );
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load RFQ details."
      );
    } finally {
      setDetailLoading(false);
    }
  };

  const issueRFQ = async () => {
    try {
      setActionLoading(true);

      const response =
        await rfqService.issueRFQ(
          selectedRFQ._id
        );

      const updated =
        await rfqService.getRFQById(
          selectedRFQ._id
        );

      setSelectedRFQ(updated.data);

      await fetchRFQs();

      return response;
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to issue RFQ."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const closeRFQ = async () => {
    try {
      setActionLoading(true);

      const response =
        await rfqService.closeRFQ(
          selectedRFQ._id
        );

      const updated =
        await rfqService.getRFQById(
          selectedRFQ._id
        );

      setSelectedRFQ(updated.data);

      await fetchRFQs();

      return response;
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to close RFQ."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const openQuotationDrawer = () =>
    setQuotationDrawerOpen(true);

  const closeQuotationDrawer = () =>
    setQuotationDrawerOpen(false);

  const createQuotation = async (data) => {
    try {
      setActionLoading(true);

      await quotationService.createQuotation(
        data
      );

      const quotationResponse =
        await quotationService.getQuotationsByRFQ(
          selectedRFQ._id
        );

      setQuotations(
        quotationResponse.data || []
      );

      setQuotationDrawerOpen(false);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to create quotation."
      );
    } finally {
      setActionLoading(false);
    }
  };

  return {
    rfqs: filteredRFQs,
    loading,

    selectedRFQ,
    quotations,

    search,
    setSearch,

    status,
    setStatus,

    selectRFQ,

    snackbar,
    closeSnackbar,

    refreshRFQs: fetchRFQs,

    detailLoading,
    actionLoading,

    issueRFQ,
    closeRFQ,

    quotationDrawerOpen,
    openQuotationDrawer,
    closeQuotationDrawer,

    createQuotation,
  };
}

export default useRFQs;