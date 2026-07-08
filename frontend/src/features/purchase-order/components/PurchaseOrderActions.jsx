import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

function PurchaseOrderActions({
  purchaseOrder,
  loading,
  onIssue,
  onCancel,
}) {
  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [dialogType, setDialogType] =
    useState(null);

  if (!purchaseOrder) {
    return null;
  }

  const isDraft =
    purchaseOrder.status === "DRAFT";

  const isIssued =
    purchaseOrder.status === "ISSUED";

  const isCancelled =
    purchaseOrder.status === "CANCELLED";

  const handleIssueClick = () => {
    setDialogType("issue");
    setDialogOpen(true);
  };

  const handleCancelClick = () => {
    setDialogType("cancel");
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (dialogType === "issue") {
      onIssue(purchaseOrder._id);
    }

    if (dialogType === "cancel") {
      onCancel(purchaseOrder._id);
    }

    setDialogOpen(false);
    setDialogType(null);
  };

  const handleClose = () => {
    if (loading) return;

    setDialogOpen(false);
    setDialogType(null);
  };

  return (
    <>
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
                loading || !isDraft
              }
              onClick={handleIssueClick}
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
              onClick={handleCancelClick}
            >
              Cancel Purchase Order
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <ConfirmationDialog
        open={dialogOpen}
        loading={loading}
        title={
          dialogType === "issue"
            ? "Issue Purchase Order"
            : "Cancel Purchase Order"
        }
        message={
          dialogType === "issue"
            ? "Are you sure you want to issue this Purchase Order? Once issued, it will be sent for procurement."
            : "Are you sure you want to cancel this Purchase Order? This action cannot be undone."
        }
        confirmText={
          dialogType === "issue"
            ? "Issue PO"
            : "Cancel PO"
        }
        cancelText="Back"
        confirmColor={
          dialogType === "issue"
            ? "success"
            : "error"
        }
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </>
  );
}

export default PurchaseOrderActions;