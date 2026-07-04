import {
  Alert,
  Stack,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import PurchaseOrderInfoCard from "./PurchaseOrderInfoCard";
import PurchaseOrderItemsTable from "./PurchaseOrderItemsTable";
import PurchaseOrderActions from "./PurchaseOrderActions";

function PurchaseOrderDetailPanel({
  purchaseOrder,
  loading = false,
  actionLoading = false,
  onIssue,
  onCancel,
}) {
  if (loading) {
    return <Loader />;
  }

  if (!purchaseOrder) {
    return (
      <Alert severity="info">
        Select a Purchase Order from the left to view its details.
      </Alert>
    );
  }

  return (
    <Stack spacing={3}>
      <PurchaseOrderInfoCard
        purchaseOrder={purchaseOrder}
      />

      <PurchaseOrderItemsTable
        items={purchaseOrder.items ?? []}
      />

      <PurchaseOrderActions
        purchaseOrder={purchaseOrder}
        loading={actionLoading}
        onIssue={onIssue}
        onCancel={onCancel}
      />
    </Stack>
  );
}

export default PurchaseOrderDetailPanel;