import {
  Box,
  Grid,
} from "@mui/material";

import AppSnackbar from "../../../components/common/AppSnackbar";

import PurchaseOrderStats from "../components/PurchaseOrderStats";
import PurchaseOrderToolbar from "../components/PurchaseOrderToolbar";
import PurchaseOrderTable from "../components/PurchaseOrderTable";
import PurchaseOrderDetailPanel from "../components/PurchaseOrderDetailPanel";
import CreatePurchaseOrderDrawer from "../components/CreatePurchaseOrderDrawer";

import usePurchaseOrders from "../hooks/usePurchaseOrders";

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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PurchaseOrderStats purchaseOrders={purchaseOrders} />

        <PurchaseOrderToolbar
          search={search}
          onSearchChange={setSearch}
          onCreatePurchaseOrder={() =>
            setDrawerOpen(true)
          }
        />

        <Grid container spacing={3} sx={{ mt: 1 }}>
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
              onIssue={issuePurchaseOrder}
              onCancel={cancelPurchaseOrder}
            />
          </Grid>
        </Grid>
      </Box>

      <CreatePurchaseOrderDrawer
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
        quotations={selectedQuotations}
        creatingQuotationId={
          creatingQuotationId
        }
        onCreate={createPurchaseOrder}
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

export default PurchaseOrderPage;