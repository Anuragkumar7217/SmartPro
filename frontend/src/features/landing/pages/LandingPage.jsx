import { Box, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import HowItWorksSection from "../components/HowItWorksSection";
import RoleBasedDashboards from "../components/RoleBasedDashboards";

function LandingPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: theme.palette.background.gradient,
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Floating Header */}
      <LandingNavbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. How It Works Section */}
      <HowItWorksSection />

      {/* 4. Role-Based Dashboards */}
      <RoleBasedDashboards />

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: "auto",
          bgcolor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.01)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} SmartPro. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link href="#" variant="body2" color="text.secondary" sx={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="#" variant="body2" color="text.secondary" sx={{ textDecoration: "none" }}>
                Terms of Service
              </Link>
            </Stack>

          </Stack>
        </Container>
      </Box>

      {/* Modal Dialog Portal */}
      <Outlet />
    </Box>
  );
}

export default LandingPage;