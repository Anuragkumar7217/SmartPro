import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

function PurchaseOrderActions({
  purchaseOrder,
  loading,
  onIssue,
  onCancel,
}) {
  if (!purchaseOrder) {
    return null;
  }

  const isDraft =
    purchaseOrder.status === "DRAFT";

  const isIssued =
    purchaseOrder.status === "ISSUED";

  const isCancelled =
    purchaseOrder.status === "CANCELLED";

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Purchase Order Actions
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            color="success"
            disabled={
              loading ||
              !isDraft
            }
            onClick={() =>
              onIssue(
                purchaseOrder._id
              )
            }
          >
            Issue Purchase Order
          </Button>

          <Button
            variant="outlined"
            color="error"
            disabled={
              loading ||
              isCancelled ||
              isIssued
            }
            onClick={() =>
              onCancel(
                purchaseOrder._id
              )
            }
          >
            Cancel Purchase Order
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PurchaseOrderActions;