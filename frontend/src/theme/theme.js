import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#4F46E5",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#F59E0B",
    },
    error: {
      main: "#EF4444",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "3rem",
      fontWeight: 800,
    },

    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },

    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: ".875rem",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "0 20px 60px rgba(0,0,0,.08)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "12px 24px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "medium",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,

          "&.Mui-focused fieldset": {
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export default theme;