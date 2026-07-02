import { useCallback, useEffect, useState } from "react";

import useSnackbar from "../../../hooks/useSnackbar";
import rfqService from "../services/rfqService";

function useApprovedPurchaseRequests() {
  const [requests, setRequests] = useState([]);
  const [vendors, setVendors] = useState([]);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] =
    useState(false);

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [createDrawerOpen, setCreateDrawerOpen] =
    useState(false);

  const {
    snackbar,
    showSuccess,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchApprovedRequests =
    useCallback(async () => {
      try {
        setLoading(true);

        const [
          approvedResponse,
          rfqResponse,
        ] = await Promise.all([
          rfqService.getApprovedPurchaseRequests(),
          rfqService.getRFQs(),
        ]);

        const approvedRequests =
          approvedResponse.data || [];

        const rfqs =
          rfqResponse.data || [];

        // Hide PRs whose RFQ already exists
        const availableRequests =
          approvedRequests.filter(
            (pr) =>
              !rfqs.some(
                (rfq) =>
                  rfq.purchaseRequest?._id ===
                  pr._id
              )
          );

        setRequests(availableRequests);
      } catch (error) {
        showError(
          error.response?.data?.message ||
            "Failed to load approved purchase requests."
        );
      } finally {
        setLoading(false);
      }
    }, [showError]);

  const fetchVendors = useCallback(async () => {
    try {
      const response =
        await rfqService.getVendors();

      setVendors(response.data || []);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load vendors."
      );
    }
  }, [showError]);

  useEffect(() => {
    fetchApprovedRequests();
    fetchVendors();
  }, [
    fetchApprovedRequests,
    fetchVendors,
  ]);

  const openRequestDrawer = (request) => {
    setSelectedRequest(request);
    setDrawerOpen(true);
  };

  const closeRequestDrawer = () => {
    setDrawerOpen(false);
    setSelectedRequest(null);
  };

  const openCreateDrawer = () => {
    setCreateDrawerOpen(true);
  };

  const closeCreateDrawer = () => {
    setCreateDrawerOpen(false);
  };

  const createRFQ = async (payload) => {
    try {
      setActionLoading(true);

      const response =
        await rfqService.createRFQ(payload);

      showSuccess(
        response.message ||
          "RFQ created successfully."
      );

      setCreateDrawerOpen(false);
      setDrawerOpen(false);
      setSelectedRequest(null);

      // Refresh Approved PR list
      await fetchApprovedRequests();
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to create RFQ."
      );
    } finally {
      setActionLoading(false);
    }
  };

  return {
    requests,
    vendors,

    loading,
    actionLoading,

    selectedRequest,

    drawerOpen,
    createDrawerOpen,

    snackbar,

    openRequestDrawer,
    closeRequestDrawer,

    openCreateDrawer,
    closeCreateDrawer,

    createRFQ,

    closeSnackbar,

    refreshApprovedRequests:
      fetchApprovedRequests,
  };
}

export default useApprovedPurchaseRequests;