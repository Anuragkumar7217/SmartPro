import { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

function ApprovalActions({
  loading = false,
  onApprove,
  onReject,
}) {
  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [action, setAction] =
    useState(null);

  const handleApproveClick = () => {
    setAction("approve");
    setDialogOpen(true);
  };

  const handleRejectClick = () => {
    setAction("reject");
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (action === "approve") {
      onApprove();
    }

    if (action === "reject") {
      onReject();
    }

    setDialogOpen(false);
    setAction(null);
  };

  const handleClose = () => {
    if (loading) return;

    setDialogOpen(false);
    setAction(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-end",
          pt: 1,
        }}
      >
        <Button
          variant="outlined"
          color="error"
          disabled={loading}
          onClick={handleRejectClick}
          sx={{
            minWidth: 140,
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          {loading ? (
            <CircularProgress
              size={20}
              color="inherit"
            />
          ) : (
            "Reject"
          )}
        </Button>

        <Button
          variant="contained"
          color="success"
          disabled={loading}
          onClick={handleApproveClick}
          sx={{
            minWidth: 140,
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          {loading ? (
            <CircularProgress
              size={20}
              color="inherit"
            />
          ) : (
            "Approve"
          )}
        </Button>
      </Box>

      <ConfirmationDialog
        open={dialogOpen}
        loading={loading}
        title={
          action === "approve"
            ? "Approve Purchase Request"
            : "Reject Purchase Request"
        }
        message={
          action === "approve"
            ? "Are you sure you want to approve this Purchase Request?"
            : "Are you sure you want to reject this Purchase Request?"
        }
        confirmText={
          action === "approve"
            ? "Approve"
            : "Reject"
        }
        cancelText="Cancel"
        confirmColor={
          action === "approve"
            ? "success"
            : "error"
        }
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </>
  );
}

export default ApprovalActions;