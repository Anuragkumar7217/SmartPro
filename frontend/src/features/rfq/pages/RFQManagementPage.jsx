import {
  Box,
  Grid,
} from "@mui/material";

import Loader from "../../../components/common/Loader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import RFQFilters from "../components/RFQFilters";
import RFQTable from "../components/RFQTable";
import RFQDetailPanel from "../components/RFQDetailPanel";

import useRFQs from "../hooks/useRFQs";

function RFQManagementPage() {
  const {
    rfqs,
    loading,
    detailLoading,
    actionLoading,

    selectedRFQ,

    search,
    setSearch,

    status,
    setStatus,

    selectRFQ,

    issueRFQ,
    closeRFQ,

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
          <Grid size={{ xs: 12, md: 5 }}>
            <RFQTable
              rfqs={rfqs}
              selectedRFQ={selectedRFQ}
              onSelect={selectRFQ}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <RFQDetailPanel
              rfq={selectedRFQ}
              loading={
                detailLoading || actionLoading
              }
              onIssue={issueRFQ}
              onClose={closeRFQ}
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

export default RFQManagementPage;