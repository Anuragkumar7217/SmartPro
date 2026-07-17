import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getCustomTheme from "./theme/theme";
import { useThemeStore } from "./store/themeStore";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => getCustomTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;