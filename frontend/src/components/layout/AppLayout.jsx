import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AppLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      {/* Sidebar */}

      <Sidebar />

      {/* Right Section */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Navbar */}

        <Navbar />

        {/* Page Content */}

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 4,
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;