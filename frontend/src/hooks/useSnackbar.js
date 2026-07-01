import { useCallback, useState } from "react";

function useSnackbar() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const showSnackbar = useCallback((message, severity = "success") => {
    setSnackbar({
      open: true,
      severity,
      message,
    });
  }, []);

  const showSuccess = useCallback(
    (message) => {
      showSnackbar(message, "success");
    },
    [showSnackbar]
  );

  const showError = useCallback(
    (message) => {
      showSnackbar(message, "error");
    },
    [showSnackbar]
  );

  const showWarning = useCallback(
    (message) => {
      showSnackbar(message, "warning");
    },
    [showSnackbar]
  );

  const showInfo = useCallback(
    (message) => {
      showSnackbar(message, "info");
    },
    [showSnackbar]
  );

  const closeSnackbar = useCallback((_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((previous) => ({
      ...previous,
      open: false,
    }));
  }, []);

  return {
    snackbar,
    showSnackbar,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    closeSnackbar,
  };
}

export default useSnackbar;