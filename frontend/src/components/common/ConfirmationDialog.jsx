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
      onClose={loading ? undefined : onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: "0 16px 40px rgba(15,23,42,.15)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 20,
          pt: 3,
          pb: 1,
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
        sx={{
          px: 3,
          pt: 1,
          pb: 3,
        }}
      >
        <DialogContentText
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: 14,
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
          pt: 0,
          gap: 1.5,
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          disabled={loading}
          onClick={onClose}
          sx={{
            minWidth: 110,
            height: 42,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          {cancelText}
        </Button>

        <Button
          variant="contained"
          color={confirmColor}
          disabled={loading}
          onClick={onConfirm}
          sx={{
            minWidth: 110,
            height: 42,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",

            "&:hover": {
              boxShadow: "0 6px 14px rgba(0,0,0,.15)",
            },
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;