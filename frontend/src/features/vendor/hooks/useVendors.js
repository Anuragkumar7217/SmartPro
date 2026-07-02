import { useCallback, useEffect, useState } from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import vendorService from "../services/vendorService";

function useVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] =
    useState(false);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const {
    snackbar,
    showSuccess,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const fetchVendors = useCallback(async () => {
    try {
      setLoading(true);

      const response =
        await vendorService.getVendors();

      setVendors(response.data || []);
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to load vendors."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  useEffect(() => {
    fetchVendors();
  }, [fetchVendors]);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const createVendor = async (
    vendorData,
    resetForm
  ) => {
    try {
      setActionLoading(true);

      const response =
        await vendorService.createVendor(
          vendorData
        );

      showSuccess(response.message);

      resetForm?.();

      closeDrawer();

      await fetchVendors();
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Failed to create vendor."
      );
    } finally {
      setActionLoading(false);
    }
  };

  return {
    vendors,

    loading,
    actionLoading,

    drawerOpen,

    search,
    setSearch,

    city,
    setCity,

    snackbar,
    closeSnackbar,

    openDrawer,
    closeDrawer,

    createVendor,

    refreshVendors: fetchVendors,
  };
}

export default useVendors;