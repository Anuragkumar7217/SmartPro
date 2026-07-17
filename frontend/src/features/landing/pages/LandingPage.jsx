import { Box, Button, Container, Grid, Stack, Typography, Link, Card, useTheme } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { ArrowRight, LayoutDashboard, ShieldCheck, Building2, FileSpreadsheet, ClipboardList } from "lucide-react";
import LandingNavbar from "../components/LandingNavbar";
import illustration from "../../../assets/procurement-illustration.png";

function LandingPage() {
  const theme = useTheme();

  const features = [
    { icon: ShieldCheck, title: "Role Based Access", desc: "Secure permissions for employees, managers, and admins." },
    { icon: Building2, title: "Vendor Management", desc: "Keep track of active vendor performance and contacts." },
    { icon: FileSpreadsheet, title: "RFQ Workflow", desc: "Request quotations from suppliers and easily compare bids." },
    { icon: ClipboardList, title: "Purchase Orders", desc: "Automatically generate and track official POs." },
  ];

  const steps = [
    { num: "01", title: "Submit Request", desc: "Create a purchase request in seconds." },
    { num: "02", title: "Get Approval", desc: "Managers approve with a single click." },
    { num: "03", title: "Collect Quotes", desc: "Send RFQs to vendors and gather quotes." },
    { num: "04", title: "Generate PO", desc: "Convert approved quotes into orders." },
  ];

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
      <LandingNavbar />

      {/* Hero Fold */}
      <Container maxWidth="lg" sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-1px",
                }}
              >
                Enterprise Procurement{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Made Simple.
                </Box>
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                Manage the complete procurement lifecycle from Purchase Request to Purchase Order through one intelligent enterprise platform.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={18} />}
                  sx={{ borderRadius: 3, px: 3.5, height: 48 }}
                >
                  Get Started
                </Button>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  size="large"
                  startIcon={<LayoutDashboard size={18} />}
                  sx={{ borderRadius: 3, px: 3.5, height: 48 }}
                >
                  Dashboard
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right illustration column */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={illustration}
              alt="Procurement Illustration"
              sx={{
                width: "100%",
                maxWidth: 480,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Problem / Features Fold */}
      <Box
        id="problem"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255, 255, 255, 0.4)",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack spacing={1.5} sx={{ maxWidth: 600 }}>
              <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                Feature Suite
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 800 }}>
                Why choose SmartPro?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Eliminate manual spreadsheet errors and optimize your workflow.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <Card sx={{ p: 3, height: "100%", bgcolor: theme.palette.background.paper }}>
                      <Stack spacing={2}>
                        <Box sx={{ width: 40, height: 40, borderRadius: 1.5, bgcolor: "primary.light", display: "flex", alignItems: "center", justifyContent: "center", color: "primary.main", opacity: 0.85 }}>
                          <Icon size={20} />
                        </Box>
                        <Typography variant="h6" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Stack>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* How it works Fold */}
      <Container id="how-it-works" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={6}>
          <Stack spacing={1.5} sx={{ maxWidth: 600 }}>
            <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Our Workflow
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 800 }}>
              How SmartPro works
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A comprehensive system mapping out the entire lifecycle.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {steps.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.title}>
                <Card sx={{ p: 3, height: "100%", borderStyle: "dashed" }}>
                  <Stack spacing={1.5}>
                    <Typography variant="h3" sx={{ fontSize: "2rem", fontWeight: 900, color: "primary.light", opacity: 0.4 }}>
                      {step.num}
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

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
