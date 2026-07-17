import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowRight, LayoutDashboard, Check } from "lucide-react";
import illustration from "../../../assets/procurement-illustration.png";

function HeroSection() {
  const checklists = [
    "Role-based access",
    "Vendor management",
    "RFQ workflow",
    "Purchase order tracking",
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 2, md: 6 } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-1px",
        }}
      >
        Smart procurement{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Simplified.
        </Box>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Left text column */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <Stack spacing={4}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              SmartPro simplifies enterprise procurement by bringing purchase requests, approvals, vendor quotations, and purchase orders together in one secure platform.
            </Typography>

            {/* Checklist */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
                pt: 2,
              }}
            >
              {checklists.map((item) => (
                <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                  <Box sx={{ color: "primary.main", display: "flex" }}>
                    <Check size={18} />
                  </Box>
                  <Typography variant="body2" fontWeight={600}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Stack direction="row" spacing={3}>
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
        </Box>

        {/* Right illustration column */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        </Box>
      </Box>
    </Container>
  );
}

export default HeroSection;
