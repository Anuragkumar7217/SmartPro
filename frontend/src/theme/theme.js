import { createTheme } from "@mui/material/styles";

const getCustomTheme = (mode) => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
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
        default: isDark ? "#121212" : "#F8FAFC",
        paper: isDark ? "#1E1E1E" : "#FFFFFF",
        gradient: isDark
          ? "linear-gradient(135deg, #121212 0%, #1A1A1A 100%)"
          : "linear-gradient(135deg,#F8FAFC 0%,#EEF2FF 50%,#F5F3FF 100%)",
        cardGradient: isDark
          ? "linear-gradient(135deg,#1E1E1E 0%,#121212 100%)"
          : "linear-gradient(135deg,#FFFFFF 0%,#F8FAFC 100%)",
      },

      text: {
        primary: isDark ? "#F8FAFC" : "#111827",
        secondary: isDark ? "#94A3B8" : "#6B7280",
      },

      divider: isDark ? "#334155" : "#E5E7EB",
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
        color: isDark ? "#94A3B8" : "#6B7280",
      },

      caption: {
        fontSize: ".75rem",
        color: isDark ? "#64748B" : "#9CA3AF",
      },

      button: {
        fontWeight: 600,
        textTransform: "none",
        fontSize: ".95rem",
      },
    },

    shadows: [
      "none",
      isDark ? "0 8px 30px rgba(0,0,0,.3)" : "0 8px 30px rgba(15,23,42,.05)",
      ...Array(23).fill(isDark ? "0 8px 30px rgba(0,0,0,.3)" : "0 8px 30px rgba(15,23,42,.05)"),
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: isDark
              ? "linear-gradient(135deg, #121212 0%, #1A1A1A 100%)"
              : "linear-gradient(135deg,#F8FAFC 0%,#EEF2FF 50%,#F5F3FF 100%)",
            minHeight: "100vh",
            transition: "background 0.3s ease, color 0.3s ease",
          },
        },
      },

      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },

        styleOverrides: {
          root: {
            background: isDark ? "#1E1E1E" : "#FFFFFF",
            border: isDark ? "1px solid #334155" : "1px solid #E5E7EB",
            borderRadius: 20,
            boxShadow: isDark ? "0 8px 30px rgba(0,0,0,.2)" : "0 8px 30px rgba(15,23,42,.05)",
            transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: isDark ? "1px solid #334155" : "1px solid #E5E7EB",
            boxShadow: isDark ? "0 8px 30px rgba(0,0,0,.2)" : "0 8px 30px rgba(15,23,42,.05)",
            transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
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
            transition: "all 0.3s ease",
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
            color: isDark ? "#818CF8" : "#625BEC",
            borderColor: isDark ? "#818CF8" : "#625BEC",

            "&:hover": {
              color: "#fff",
              borderColor: isDark ? "#6366F1" : "#4338CA",
              backgroundColor: isDark ? "#4F46E5" : "#625BEC",
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
            background: isDark ? "#121212" : "#F9FAFB",
            borderRadius: 12,
            transition: "background-color 0.3s ease, border-color 0.3s ease",

            "& fieldset": {
              borderColor: isDark ? "#334155" : "#E5E7EB",
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
            color: isDark ? "#F8FAFC" : "#111827",
          },
        },
      },

      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: isDark ? "1px solid #334155" : "1px solid #E5E7EB",
            overflowX: "auto",
            background: isDark ? "#1E1E1E" : "#FFFFFF",
          },
        },
      },

      MuiTableHead: {
        styleOverrides: {
          root: {
            background: isDark ? "#121212" : "#F9FAFB",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: 600,
            color: isDark ? "#F8FAFC" : "#374151",
          },

          body: {
            borderColor: isDark ? "#334155" : "#F3F4F6",
            color: isDark ? "#E2E8F0" : "#111827",
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
            borderColor: isDark ? "#334155" : "#E5E7EB",
          },
        },
      },
    },
  });
};

export default getCustomTheme;