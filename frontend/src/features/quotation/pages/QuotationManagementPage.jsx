import {
  Box,
  Grid,
} from "@mui/material";

import Loader from "../../../components/common/Loader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import QuotationRFQFilters from "../components/QuotationRFQFilters";
import QuotationRFQTable from "../components/QuotationRFQTable";
import QuotationDetailPanel from "../components/QuotationDetailPanel";

import useQuotations from "../hooks/useQuotations";

function QuotationManagementPage() {
  const {
    loading,
    detailLoading,

    filteredRFQs,

    selectedRFQ,

    search,
    setSearch,

    selectRFQ,

    snackbar,
    closeSnackbar,
  } = useQuotations();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <QuotationRFQFilters
          search={search}
          onSearchChange={setSearch}
        />

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              lg: 5,
            }}
          >
            <QuotationRFQTable
              rfqs={filteredRFQs}
              selectedRFQ={selectedRFQ}
              onSelect={selectRFQ}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              lg: 7,
            }}
          >
            <QuotationDetailPanel
              rfq={selectedRFQ}
              loading={detailLoading}
            />
          </Grid>
        </Grid>
      </Box>

      <AppSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={closeSnackbar}
      />
    </>
  );
}

export default QuotationManagementPage;