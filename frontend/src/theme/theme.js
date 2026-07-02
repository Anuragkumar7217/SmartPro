import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5",
      dark: "#4338CA",
      light: "#6366F1",
    },

    secondary: {
      main: "#6366F1",
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

    info: {
      main: "#3B82F6",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },

    divider: "#E5E7EB",
  },

  typography: {
    fontFamily: [
      "Inter",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },

    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    subtitle2: {
      fontSize: ".875rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },

    body2: {
      fontSize: ".875rem",
      color: "#6B7280",
    },

    caption: {
      fontSize: ".75rem",
      color: "#9CA3AF",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: ".95rem",
    },
  },

  // shape: {
  //   borderRadius: 10,
  // },

  shadows: [
    "none",
    "0 8px 30px rgba(15,23,42,.05)",
    ...Array(23).fill("0 8px 30px rgba(15,23,42,.05)"),
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(135deg,#F8FAFC 0%,#EEF2FF 50%,#F5F3FF 100%)",
          minHeight: "100vh",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 20,
          boxShadow: "0 8px 30px rgba(15,23,42,.05)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid #E5E7EB",
          boxShadow: "0 8px 30px rgba(15,23,42,.05)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          height: 48,
          padding: "0 24px",
          fontWeight: 600,
          textTransform: "none",
        },

        // Filled Button
        containedPrimary: {
          background: "linear-gradient(135deg,#4F46E5,#6366F1)",
          color: "#fff",
          boxShadow: "0 10px 24px rgba(79,70,229,.25)",

          "&:hover": {
            background: "linear-gradient(135deg,#4338CA,#4F46E5)",
            boxShadow: "0 12px 28px rgba(79,70,229,.35)",
          },
        },

        // Outlined Button
        outlinedPrimary: {
          color: "#625BEC",
          borderColor: "#625BEC",

          "&:hover": {
            color: "#fff",
            borderColor: "#4338CA",
            backgroundColor: "#625BEC",
          },
        },

        // Small Outlined Button (View/Edit/Delete)
        sizeSmall: {
          borderRadius: 4,
          height: 34,
          padding: "0 14px",
          fontSize: "0.8rem",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#F9FAFB",
          borderRadius: 12,

          "& fieldset": {
            borderColor: "#E5E7EB",
          },

          "&:hover fieldset": {
            borderColor: "#4F46E5",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#4F46E5",
            borderWidth: 2,
          },
        },

        input: {
          padding: "14px 16px",
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid #E5E7EB",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#F9FAFB",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          color: "#374151",
        },

        body: {
          borderColor: "#F3F4F6",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E7EB",
        },
      },
    },
  },
});

export default theme;