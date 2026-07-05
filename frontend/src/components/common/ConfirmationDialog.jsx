import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function ConfirmationDialog({
  open,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",

  confirmText = "Confirm",
  cancelText = "Cancel",

  confirmColor = "primary",

  loading = false,

  onConfirm,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={
        loading
          ? undefined
          : onClose
      }
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            color: "text.primary",
            lineHeight: 1.7,
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 3,
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          disabled={loading}
        >
          {cancelText}
        </Button>

        <Button
          variant="contained"
          color={confirmColor}
          onClick={onConfirm}
          disabled={loading}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;