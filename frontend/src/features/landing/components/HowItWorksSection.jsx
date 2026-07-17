import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { FilePlus, UserCheck, Send, FileSignature } from "lucide-react";

function HowItWorksSection() {
  const theme = useTheme();

  const steps = [
    {
      icon: FilePlus,
      number: "01",
      title: "Create Request",
      description: "Employees easily submit purchase requests with item descriptions, budgets, and files in a unified form.",
      color: "#4F46E5",
      bgColor: "rgba(79, 70, 229, 0.06)",
    },
    {
      icon: UserCheck,
      number: "02",
      title: "Approve Instantly",
      description: "Managers review requests, verify department budgets, and approve or reject them on a unified dashboard.",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.06)",
    },
    {
      icon: Send,
      number: "03",
      title: "Send RFQ to Vendors",
      description: "Convert requests into RFQs (Request for Quotations), request bids, and track incoming quotes from multiple vendors.",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.06)",
    },
    {
      icon: FileSignature,
      number: "04",
      title: "Generate Purchase Order",
      description: "Compare bids, choose the winning quote, and convert it into a formal Purchase Order (PO) sent directly to the vendor.",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.06)",
    },
  ];

  return (
    <Box id="how-it-works" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          {/* Section Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 700 }}>
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              How It Works
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              Four steps to procurement excellence
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
              From initial department request to final supplier purchase order, SmartPro handles the heavy lifting.
            </Typography>
          </Stack>

          {/* Steps Timeline Grid */}
          <Grid container spacing={4}>
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Grid item xs={12} sm={6} lg={3} key={step.title}>
                  <Stack
                    spacing={3}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 4,
                      position: "relative",
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: "background.paper",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: step.color,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                      },
                    }}
                  >
                    {/* Floating Step Number */}
                    <Typography
                      variant="h2"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 24,
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                        userSelect: "none",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </Typography>

                    {/* Icon Container */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: step.bgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: step.color,
                      }}
                    >
                      <Icon size={22} />
                    </Box>

                    {/* Content */}
                    <Stack spacing={1}>
                      <Typography variant="h6" fontWeight={700} color="text.primary">
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {step.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default HowItWorksSection;
