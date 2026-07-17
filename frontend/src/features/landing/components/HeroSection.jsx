import { Box, Button, Container, Stack, Typography, Grid, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowRight, Play, FileCheck, DollarSign, Users, Award } from "lucide-react";

function HeroSection() {
  const theme = useTheme();

  const features = [
    { icon: FileCheck, text: "Automated RFQs", color: "#3B82F6" },
    { icon: DollarSign, text: "Budget Controls", color: "#10B981" },
    { icon: Users, text: "Multi-level Approvals", color: "#8B5CF6" },
    { icon: Award, text: "Vendor Analytics", color: "#F59E0B" },
  ];

  return (
    <Box
      sx={{
        pt: { xs: 16, md: 22 },
        pb: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blurred gradients for modern glass aesthetic */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.05) 50%, rgba(255,255,255,0) 100%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(245,158,11,0.02) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Stack spacing={4} alignItems={{ xs: "center", lg: "flex-start" }} textAlign={{ xs: "center", lg: "left" }}>
              {/* Micro-badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: 99,
                  bgcolor: theme.palette.mode === "dark" ? "rgba(99,102,241,0.15)" : "rgba(79,70,229,0.08)",
                  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(99,102,241,0.25)" : "rgba(79,70,229,0.15)"}`,
                }}
              >
                <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  ✨ Intelligent Procurement
                </Typography>
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                }}
              >
                Simplify your company's{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  procurement
                </Box>{" "}
                and control spend.
              </Typography>

              {/* Sub-headline */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                An all-in-one suite for team purchase requests, manager approvals, vendor quotes, and purchase orders. Keep your corporate budget on track without the manual spreadsheets.
              </Typography>

              {/* CTA Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width={{ xs: "100%", sm: "auto" }}>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    px: 4,
                    height: 54,
                    borderRadius: 3.5,
                    boxShadow: "0 10px 24px rgba(79,70,229,0.25)",
                    fontSize: "1rem",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => {
                    const el = document.getElementById("how-it-works");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outlined"
                  size="large"
                  startIcon={<Play size={18} />}
                  sx={{
                    px: 4,
                    height: 54,
                    borderRadius: 3.5,
                    fontSize: "1rem",
                    borderWidth: 2,
                    borderColor: theme.palette.divider,
                    color: "text.primary",
                    "&:hover": {
                      borderWidth: 2,
                      borderColor: "primary.main",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  See How It Works
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column: Visual badging dashboard preview */}
          <Grid item xs={12} lg={5} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                position: "relative",
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Ambient glowing circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  opacity: 0.15,
                  filter: "blur(60px)",
                }}
              />

              {/* Core branding central card */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: 5,
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[1],
                  width: 340,
                  position: "relative",
                  zIndex: 2,
                  transform: "rotate(-2deg)",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "rotate(0deg) scale(1.02)",
                  },
                }}
              >
                <Stack spacing={3}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "success.main" }} />
                      <Typography variant="caption" color="text.secondary" fontWeight={600}>
                        SmartPro Dashboard Live
                      </Typography>
                    </Stack>
                    <Typography variant="caption" sx={{ bgcolor: "rgba(79,70,229,0.1)", px: 1.5, py: 0.5, borderRadius: 1.5, color: "primary.main", fontWeight: 700 }}>
                      v1.2.0
                    </Typography>
                  </Box>

                  <Stack spacing={2}>
                    <Box sx={{ height: 12, width: "70%", bgcolor: theme.palette.divider, borderRadius: 1 }} />
                    <Box sx={{ height: 12, width: "90%", bgcolor: theme.palette.divider, borderRadius: 1 }} />
                    <Box sx={{ height: 12, width: "40%", bgcolor: theme.palette.divider, borderRadius: 1 }} />
                  </Stack>

                  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="body2" fontWeight={700}>
                      Total Spend Monitored
                    </Typography>
                    <Typography variant="h6" fontWeight={800} color="primary.main">
                      $145,280.00
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* Floating Feature Badges */}
              {features.map((item, index) => {
                const Icon = item.icon;
                const positions = [
                  { top: 20, left: 10, rotation: "6deg" },
                  { bottom: 30, left: -20, rotation: "-8deg" },
                  { top: 40, right: -20, rotation: "-5deg" },
                  { bottom: 50, right: 10, rotation: "7deg" },
                ];
                const pos = positions[index];

                return (
                  <Box
                    key={item.text}
                    sx={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      bottom: pos.bottom,
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 3,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                      transform: `rotate(${pos.rotation})`,
                      transition: "all 0.3s ease",
                      cursor: "default",
                      "&:hover": {
                        transform: "scale(1.1) rotate(0deg)",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                        zIndex: 10,
                      },
                      ...theme.applyStyles?.("dark", {
                        bgcolor: "rgba(30, 30, 30, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 1.5,
                        bgcolor: `${item.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color,
                      }}
                    >
                      <Icon size={18} />
                    </Box>
                    <Typography variant="subtitle2" fontWeight={700} color="text.primary">
                      {item.text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
