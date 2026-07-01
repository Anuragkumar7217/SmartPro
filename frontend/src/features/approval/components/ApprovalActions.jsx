import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

function ApprovalActions({
  loading = false,
  onApprove,
  onReject,
}) {
  return (
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
        onClick={onReject}
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
        onClick={onApprove}
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
  );
}

export default ApprovalActions;