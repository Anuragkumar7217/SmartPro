import { useCallback, useEffect, useState } from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import approvalService from "../services/approvalService";

function usePendingRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    snackbar,
    showSuccess,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchPendingRequests = useCallback(async () => {
    try {
      setLoading(true);

      const response = await approvalService.getPendingRequests();

      setRequests(response.data || []);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load pending requests."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  useEffect(() => {
    fetchPendingRequests();
  }, [fetchPendingRequests]);

  const openApprovalDrawer = (request) => {
    setSelectedRequest(request);
    setDrawerOpen(true);
  };

  const closeApprovalDrawer = () => {
    setSelectedRequest(null);
    setDrawerOpen(false);
  };

  const approveRequest = async (requestId, managerComment) => {
    try {
      setActionLoading(true);

      const response = await approvalService.approveRequest(
        requestId,
        managerComment
      );

      showSuccess(response.message);

      closeApprovalDrawer();

      await fetchPendingRequests();
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to approve request."
      );
    } finally {
      setActionLoading(false);
    }
  };

  const rejectRequest = async (requestId, managerComment) => {
    try {
      setActionLoading(true);

      const response = await approvalService.rejectRequest(
        requestId,
        managerComment
      );

      showSuccess(response.message);

      closeApprovalDrawer();

      await fetchPendingRequests();
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to reject request."
      );
    } finally {
      setActionLoading(false);
    }
  };

  return {
    requests,
    loading,
    actionLoading,

    selectedRequest,
    drawerOpen,

    snackbar,

    openApprovalDrawer,
    closeApprovalDrawer,

    approveRequest,
    rejectRequest,

    closeSnackbar,

    refreshPendingRequests: fetchPendingRequests,
  };
}

export default usePendingRequests;