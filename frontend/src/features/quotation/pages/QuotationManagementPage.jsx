import { useState } from "react";

import {
  Box,
  Grid,
} from "@mui/material";

import Loader from "../../../components/common/Loader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import QuotationFilters from "../components/QuotationFilters";
import QuotationTable from "../components/QuotationTable";
import QuotationDetailPanel from "../components/QuotationDetailPanel";
import CreateQuotationDrawer from "../components/CreateQuotationDrawer";
import QuotationComparisonDrawer from "../components/QuotationComparisonDrawer";

import useQuotations from "../hooks/useQuotations";

function QuotationManagementPage() {
  const {
    rfqs,
    quotations,
    vendors,

    loading,
    actionLoading,

    selectedRFQ,

    createDrawerOpen,
    comparisonDrawerOpen,

    snackbar,

    selectRFQ,

    openCreateDrawer,
    closeCreateDrawer,

    openComparisonDrawer,
    closeComparisonDrawer,

    createQuotation,
    selectQuotation,

    closeSnackbar,
  } = useQuotations();

  const [search, setSearch] = useState("");

  if (loading) {
    return <Loader />;
  }

  const filteredRFQs = rfqs.filter((rfq) =>
    rfq.rfqNumber
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <QuotationFilters
          search={search}
          onSearchChange={setSearch}
        />

        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <QuotationTable
              rfqs={filteredRFQs}
              selectedRFQ={
                selectedRFQ
              }
              onSelect={selectRFQ}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            {selectedRFQ && (
              <QuotationDetailPanel
                rfq={selectedRFQ}
                quotations={
                  quotations
                }
                onCreateQuotation={
                  openCreateDrawer
                }
                onCompare={
                  openComparisonDrawer
                }
              />
            )}
          </Grid>
        </Grid>
      </Box>

      <CreateQuotationDrawer
        open={createDrawerOpen}
        onClose={closeCreateDrawer}
        rfq={selectedRFQ}
        vendors={
          selectedRFQ?.vendors ||
          []
        }
        loading={actionLoading}
        onSubmit={createQuotation}
      />

      <QuotationComparisonDrawer
        open={
          comparisonDrawerOpen
        }
        onClose={
          closeComparisonDrawer
        }
        quotations={quotations}
        onSelect={
          selectQuotation
        }
      />

      <AppSnackbar
        open={snackbar.open}
        severity={
          snackbar.severity
        }
        message={
          snackbar.message
        }
        onClose={closeSnackbar}
      />
    </>
  );
}

export default QuotationManagementPage;