import { useState } from "react";

import {
  Box,
  Button,
} from "@mui/material";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

function RFQActionButtons({
  status,
  loading = false,
  onIssue,
  onClose,
  onAddQuotation,
}) {
  const [issueDialogOpen, setIssueDialogOpen] =
    useState(false);

  const [closeDialogOpen, setCloseDialogOpen] =
    useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        {status === "DRAFT" && (
          <Button
            variant="contained"
            disabled={loading}
            onClick={() =>
              setIssueDialogOpen(true)
            }
          >
            Issue RFQ
          </Button>
        )}

        {status === "ISSUED" && (
          <>
            <Button
              variant="outlined"
              disabled={loading}
              onClick={onAddQuotation}
            >
              Add Quotation
            </Button>

            <Button
              color="error"
              variant="contained"
              disabled={loading}
              onClick={() =>
                setCloseDialogOpen(true)
              }
            >
              Close RFQ
            </Button>
          </>
        )}
      </Box>

      {/* Issue RFQ Dialog */}
      <ConfirmationDialog
        open={issueDialogOpen}
        title="Issue RFQ"
        message="Are you sure you want to issue this RFQ? Once issued, vendors will be able to submit quotations."
        confirmText="Issue RFQ"
        cancelText="Cancel"
        confirmColor="primary"
        loading={loading}
        onClose={() =>
          setIssueDialogOpen(false)
        }
        onConfirm={() => {
          setIssueDialogOpen(false);
          onIssue();
        }}
      />

      {/* Close RFQ Dialog */}
      <ConfirmationDialog
        open={closeDialogOpen}
        title="Close RFQ"
        message="Are you sure you want to close this RFQ? Vendors will no longer be able to submit quotations."
        confirmText="Close RFQ"
        cancelText="Cancel"
        confirmColor="error"
        loading={loading}
        onClose={() =>
          setCloseDialogOpen(false)
        }
        onConfirm={() => {
          setCloseDialogOpen(false);
          onClose();
        }}
      />
    </>
  );
}

export default RFQActionButtons;