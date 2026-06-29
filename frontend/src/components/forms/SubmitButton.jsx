import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function SubmitButton({
  children,
  loading = false,
  loadingText = "Loading...",
  ...props
}) {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      disabled={loading}
      sx={{
        mt: 1,
        py: 1.5,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
      }}
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress
            size={20}
            color="inherit"
            sx={{ mr: 1 }}
          />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;