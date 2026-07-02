import {
  Box,
  Button,
} from "@mui/material";

function RFQActionButtons({
  status,
  loading = false,
  onIssue,
  onClose,
}) {
  return (
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
          onClick={onIssue}
        >
          Issue RFQ
        </Button>
      )}

      {status === "ISSUED" && (
        <Button
          color="error"
          variant="contained"
          disabled={loading}
          onClick={onClose}
        >
          Close RFQ
        </Button>
      )}
    </Box>
  );
}

export default RFQActionButtons;