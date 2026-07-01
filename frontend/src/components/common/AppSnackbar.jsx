import {
  Alert,
  Snackbar,
} from "@mui/material";

function AppSnackbar({
  open,
  severity = "success",
  message = "",
  autoHideDuration = 4000,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "center",
  },
  onClose,
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
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AppSnackbar;