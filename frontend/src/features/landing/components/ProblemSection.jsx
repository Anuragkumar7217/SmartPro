import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";
import { FileSpreadsheet, EyeOff, TrendingDown, ArrowDown } from "lucide-react";

const pulseArrow = keyframes`
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(4px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
`;

function ProblemSection() {
  const theme = useTheme();

  const painCards = [
    {
      num: "01",
      title: "Manual Approvals",
      desc: "Requests move through emails and spreadsheets, causing delays and lost records.",
      consequence: "Delays",
      icon: FileSpreadsheet,
    },
    {
      num: "02",
      title: "Vendor Visibility",
      desc: "Teams struggle to compare quotations and track vendor bids in one place.",
      consequence: "Poor decisions",
      icon: EyeOff,
    },
    {
      num: "03",
      title: "No Real-Time Tracking",
      desc: "Management has no real-time visibility into procurement status and budget spending.",
      consequence: "Missed updates",
      icon: TrendingDown,
    },
  ];

  return (
    <Box
      id="problem"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.01)" : "rgba(248, 250, 252, 0.5)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 600 }}>
            <Typography variant="caption" sx={{ color: "error.main", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              The Pain
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.5px" }}>
              Procurement is often fragmented & slow
            </Typography>
          </Stack>

          {/* Editorial Pain Cards Grid */}
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {painCards.map((card, index) => (
              <Grid
                key={card.title}
                size={{ xs: 12, md: 4 }}
              >
                <Box
                  sx={{
                    px: { xs: 2, md: 4 },
                    py: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "2px solid",
                    borderColor: "divider",
                    transition: "border-color 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 0,
                      background: (theme) => theme.palette.mode === 'dark'
                        ? 'linear-gradient(90deg, rgba(239, 68, 68, 0.16) 0%, rgba(239, 68, 68, 0.02) 70%, rgba(239, 68, 68, 0) 100%)'
                        : 'linear-gradient(90deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.02) 70%, rgba(239, 68, 68, 0) 100%)',
                      transition: "opacity 0.35s ease-in-out",
                      opacity: 0,
                      pointerEvents: "none",
                    },
                    "&:hover": {
                      borderColor: "error.main",
                    },
                    "&:hover::before": {
                      opacity: 1,
                    }
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "3.5rem",
                          fontWeight: 800,
                          lineHeight: 1,
                          color: "text.primary",
                          opacity: theme.palette.mode === 'dark' ? 0.15 : 0.08,
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {card.num}
                      </Typography>
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: "50%",
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)',
                          color: "error.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <card.icon size={20} />
                      </Box>
                    </Stack>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{
                        mb: 1.5,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 4,
                        lineHeight: 1.6,
                      }}
                    >
                      {card.desc}
                    </Typography>

                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: "auto", pt: 2 }}>
                      <Box sx={{ color: "error.main", display: "flex", animation: `${pulseArrow} 2s infinite ease-in-out` }}>
                        <ArrowDown size={18} />
                      </Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "error.main",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {card.consequence}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Transition text */}
          <Typography variant="subtitle1" fontWeight={600} color="text.primary" textAlign="center" sx={{ pt: 2, maxWidth: 650 }}>
            SmartPro replaces disconnected tools with a single digital procurement workflow.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProblemSection;
