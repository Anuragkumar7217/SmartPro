import {
  Alert,
  Snackbar,
} from "@mui/material";

function AppSnackbar({
  open,
  message = "",
  severity = "success",

  autoHideDuration = 3000,

  anchorOrigin = {
    vertical: "top",
    horizontal: "right",
  },

  onClose,

  sx = {},
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={onClose}
        sx={{
          width: "100%",
          minWidth: 320,
          fontWeight: 500,
          borderRadius: 2,
          boxShadow:
            "0 8px 24px rgba(15,23,42,.15)",
          ...sx,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AppSnackbar;