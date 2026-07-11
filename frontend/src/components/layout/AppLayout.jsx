import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AppLayout() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #311042 100%)"
            : "linear-gradient(135deg,#F8FAFC 0%,#EEF2FF 50%,#F5F3FF 100%)",
      }}
    >
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,

          px: {
            xs: 2,
            md: 3,
          },

          py: {
            xs: 2,
            md: 3,
          },

          gap: 3,
        }}
      >
        <Navbar
          isMobile={isMobile}
          onMenuClick={toggleDrawer}
        />

        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            borderRadius: 5,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;