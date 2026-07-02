import { useCallback, useEffect, useState } from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import rfqService from "../services/rfqService";

function useApprovedPurchaseRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    snackbar,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchApprovedRequests = useCallback(async () => {
    try {
      setLoading(true);

      const response =
        await rfqService.getApprovedPurchaseRequests();

      setRequests(response.data || []);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load approved purchase requests."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  useEffect(() => {
    fetchApprovedRequests();
  }, [fetchApprovedRequests]);

  const openRequestDrawer = (request) => {
    setSelectedRequest(request);
    setDrawerOpen(true);
  };

  const closeRequestDrawer = () => {
    setSelectedRequest(null);
    setDrawerOpen(false);
  };

  return {
    requests,
    loading,

    selectedRequest,
    drawerOpen,

    snackbar,

    openRequestDrawer,
    closeRequestDrawer,

    closeSnackbar,

    refreshApprovedRequests: fetchApprovedRequests,
  };
}

export default useApprovedPurchaseRequests;