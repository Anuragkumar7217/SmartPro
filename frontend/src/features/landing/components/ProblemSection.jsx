import { Box, Card, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { FileSpreadsheet, ShieldAlert, MailWarning } from "lucide-react";

function ProblemSection() {
  const theme = useTheme();

  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Manual Spreadsheet Chaos",
      description: "Submitting request sheets and tracking confirmations via chaotic email threads is slow, frustrating, and prone to items getting lost in transit.",
      color: "#EF4444",
      bgColor: "rgba(239, 68, 68, 0.08)",
    },
    {
      icon: ShieldAlert,
      title: "Maverick Spend & Leakage",
      description: "Without pre-approved budget controls and structured limits, unauthorized purchases go unnoticed until it's too late, draining company capital.",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.08)",
    },
    {
      icon: MailWarning,
      title: "Slow Vendor Communication",
      description: "Manually drafting RFQs, emailing multiple suppliers, and comparing different PDF quotes by hand creates weeks of delay in critical ordering.",
      color: "#EF4444",
      bgColor: "rgba(239, 68, 68, 0.08)",
    },
  ];

  return (
    <Box
      id="problem"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(248, 250, 252, 0.5)",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Section Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 700 }}>
            <Typography
              variant="caption"
              sx={{
                color: "error.main",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              The Problem
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              Why manual procurement hurts your business
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
              Old procurement methods slow down operations, lead to budget overruns, and limit your view of company expenses.
            </Typography>
          </Stack>

          {/* Cards Grid */}
          <Grid container spacing={4}>
            {problems.map((prob) => {
              const Icon = prob.icon;
              return (
                <Grid item xs={12} md={4} key={prob.title}>
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      border: `1px solid ${theme.palette.divider}`,
                      boxShadow: theme.shadows[1],
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                        borderColor: prob.color,
                      },
                    }}
                  >
                    <Stack spacing={3}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2.5,
                          bgcolor: prob.bgColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: prob.color,
                        }}
                      >
                        <Icon size={24} />
                      </Box>

                      {/* Content */}
                      <Stack spacing={1.5}>
                        <Typography variant="h5" fontWeight={700} color="text.primary">
                          {prob.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {prob.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProblemSection;
