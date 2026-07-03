import {
  Box,
  Typography,
} from "@mui/material";

import Loader from "../../../components/common/Loader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import QuotationTable from "../components/QuotationTable";
import QuotationDetailPanel from "../components/QuotationDetailPanel";
import CreateQuotationDrawer from "../components/CreateQuotationDrawer";
import QuotationComparisonDialog from "../components/QuotationComparisonDialog";

import useQuotations from "../hooks/useQuotations";

function QuotationsPage() {
  const {
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
  } = useQuotations();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          height: "calc(100vh - 140px)",
        }}
      >
        <Box
          sx={{
            width: "40%",
          }}
        >
          <QuotationTable
            rfqs={rfqs}
            selectedRFQ={selectedRFQ}
            onSelect={selectRFQ}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
          }}
        >
          {selectedRFQ ? (
            <QuotationDetailPanel
              rfq={selectedRFQ}
              quotations={quotations}
              onCreateQuotation={
                openCreateDrawer
              }
              onCompare={
                openComparison
              }
            />
          ) : (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
              >
                Select an RFQ to view quotations.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <CreateQuotationDrawer
        open={createDrawerOpen}
        rfq={selectedRFQ}
        loading={actionLoading}
        onClose={closeCreateDrawer}
        onSubmit={createQuotation}
      />

      <QuotationComparisonDialog
        open={comparisonOpen}
        comparison={comparison}
        loading={actionLoading}
        onClose={closeComparison}
        onSelectQuotation={
          selectQuotation
        }
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

export default QuotationsPage;