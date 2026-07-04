import {
  Box,
  Grid,
} from "@mui/material";

import PageHeader from "../../../components/common/PageHeader";
import AppSnackbar from "../../../components/common/AppSnackbar";

import usePurchaseOrders from "../hooks/usePurchaseOrders";

import PurchaseOrderToolbar from "../components/PurchaseOrderToolbar";
import PurchaseOrderTable from "../components/PurchaseOrderTable";
import PurchaseOrderDetailPanel from "../components/PurchaseOrderDetailPanel";
import CreatePurchaseOrderDrawer from "../components/CreatePurchaseOrderDrawer";

function PurchaseOrderPage() {
  const {
    snackbar,
    closeSnackbar,

    loading,
    detailLoading,
    actionLoading,

    purchaseOrders,
    selectedPurchaseOrder,
    selectedQuotations,

    search,
    setSearch,

    drawerOpen,
    setDrawerOpen,

    creatingQuotationId,

    loadPurchaseOrder,

    createPurchaseOrder,

    issuePurchaseOrder,

    cancelPurchaseOrder,
  } = usePurchaseOrders();

  return (
    <Box sx={{ p: 3 }}>
      <PageHeader
        title="Purchase Orders"
        subtitle="Create, issue and manage purchase orders."
      />

      <PurchaseOrderToolbar
        search={search}
        onSearchChange={setSearch}
        onCreatePurchaseOrder={() =>
          setDrawerOpen(true)
        }
      />

      <Grid
        container
        spacing={3}
        sx={{ mt: 1 }}
      >
        <Grid size={{ xs: 12, lg: 5 }}>
          <PurchaseOrderTable
            purchaseOrders={purchaseOrders}
            loading={loading}
            selectedPurchaseOrder={
              selectedPurchaseOrder
            }
            onSelect={(purchaseOrder) =>
              loadPurchaseOrder(
                purchaseOrder._id
              )
            }
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 7 }}>
          <PurchaseOrderDetailPanel
            purchaseOrder={
              selectedPurchaseOrder
            }
            loading={detailLoading}
            actionLoading={actionLoading}
            onIssue={
              issuePurchaseOrder
            }
            onCancel={
              cancelPurchaseOrder
            }
          />
        </Grid>
      </Grid>

      <CreatePurchaseOrderDrawer
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
        quotations={selectedQuotations}
        creatingQuotationId={
          creatingQuotationId
        }
        onCreate={
          createPurchaseOrder
        }
      />

      <AppSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={closeSnackbar}
      />
    </Box>
  );
}

export default PurchaseOrderPage;