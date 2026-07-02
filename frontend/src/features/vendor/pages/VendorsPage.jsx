import { useMemo } from "react";

import { Box } from "@mui/material";

import Loader from "../../../components/common/Loader";
import PageHeader from "../../../components/common/PageHeader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import VendorDrawer from "../components/VendorDrawer";
import VendorFilters from "../components/VendorFilters";
import VendorTable from "../components/VendorTable";

import useVendors from "../hooks/useVendors";

function VendorsPage() {
  const {
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
  } = useVendors();

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const keyword = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        !keyword ||
        vendor.vendorCode
          ?.toLowerCase()
          .includes(keyword) ||
        vendor.companyName
          ?.toLowerCase()
          .includes(keyword) ||
        vendor.contactPerson
          ?.toLowerCase()
          .includes(keyword);

      const matchesCity =
        !city ||
        vendor.address
          ?.toLowerCase()
          .includes(city.toLowerCase());

      return (
        matchesSearch &&
        matchesCity
      );
    });
  }, [vendors, search, city]);

  const cities = useMemo(() => {
    return [
      ...new Set(
        vendors
          .map((vendor) => vendor.address)
          .filter(Boolean)
      ),
    ];
  }, [vendors]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <PageHeader
        //   title="Vendor Management"
          title="Manage vendor information used during the procurement process."
          buttonText="+ Add Vendor"
          onButtonClick={openDrawer}
        />

        <VendorFilters
          search={search}
          onSearchChange={setSearch}
          city={city}
          onCityChange={setCity}
          cities={cities}
        />

        <Box sx={{ mt: 2.5 }}>    
            <VendorTable
            vendors={filteredVendors}
            />
        </Box>
      </Box>

      <VendorDrawer
        open={drawerOpen}
        loading={actionLoading}
        onClose={closeDrawer}
        onCreate={createVendor}
      />

      <AppSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={closeSnackbar}
      />
    </>
  );
}

export default VendorsPage;