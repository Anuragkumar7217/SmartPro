import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AppLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",

        // Soft background similar to Login page
        background:
          "linear-gradient(180deg,#F8FAFC 0%,#F3F6FC 100%)",
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

        {/* Main Content */}

        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: "auto",

            p: 4,

            bgcolor: "transparent",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;