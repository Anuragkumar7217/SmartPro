import {
  Box,
  Grid,
} from "@mui/material";

import Loader from "../../../components/common/Loader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import RFQFilters from "../components/RFQFilters";
import RFQTable from "../components/RFQTable";
import RFQDetailPanel from "../components/RFQDetailPanel";

import CreateQuotationDrawer from "../../quotation/components/CreateQuotationDrawer";

import useRFQs from "../hooks/useRFQs";

function RFQManagementPage() {
  const {
    rfqs,
    loading,
    detailLoading,
    actionLoading,

    selectedRFQ,
    quotations,

    search,
    setSearch,

    status,
    setStatus,

    selectRFQ,

    issueRFQ,
    closeRFQ,

    quotationDrawerOpen,
    openQuotationDrawer,
    closeQuotationDrawer,

    createQuotation,

    snackbar,
    closeSnackbar,
  } = useRFQs();

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

        <RFQFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />

        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <RFQTable
              rfqs={rfqs}
              selectedRFQ={selectedRFQ}
              onSelect={selectRFQ}
            />
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <RFQDetailPanel
              rfq={selectedRFQ}
              quotations={quotations}
              loading={
                detailLoading || actionLoading
              }
              onIssue={issueRFQ}
              onClose={closeRFQ}
              onAddQuotation={
                openQuotationDrawer
              }
            />
          </Grid>
        </Grid>
      </Box>

      <CreateQuotationDrawer
        open={quotationDrawerOpen}
        onClose={closeQuotationDrawer}
        rfq={selectedRFQ}
        vendors={selectedRFQ?.vendors || []}
        quotations={quotations}
        loading={actionLoading}
        onSubmit={createQuotation}
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

export default RFQManagementPage;