import {
  Box,
  Button,
} from "@mui/material";

function CreateRFQActions({
  loading = false,
  onCancel,
  onCreate,
}) {
  return (
    <Box
      sx={{
        mt: "auto",
        pt: 2,
        display: "flex",
        justifyContent: "flex-end",
        gap: 2,
      }}
    >
      <Button
        variant="outlined"
        onClick={onCancel}
        disabled={loading}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        onClick={onCreate}
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create RFQ"}
      </Button>
    </Box>
  );
}

export default CreateRFQActions;