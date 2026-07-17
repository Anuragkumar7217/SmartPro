import { Box, Container, Grid, Stack, Typography, Card, useTheme } from "@mui/material";
import { AlertCircle } from "lucide-react";

function ProblemSection() {
  const theme = useTheme();

  const painCards = [
    {
      title: "Manual approvals",
      desc: "Requests move through emails and spreadsheets, causing delays and lost records.",
    },
    {
      title: "Poor vendor visibility",
      desc: "Teams struggle to compare quotations and track vendor bids in one place.",
    },
    {
      title: "Lack of tracking",
      desc: "Management has no real-time visibility into procurement status and budget spending.",
    },
  ];

  return (
    <Box
      id="problem"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5} alignItems="center">
          {/* Header */}
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 600 }}>
            <Typography variant="caption" sx={{ color: "error.main", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              The Pain
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 800 }}>
              Procurement is often fragmented and slow
            </Typography>
          </Stack>

          {/* Pain Cards Grid */}
          {/* Pain Cards Grid */}
          <Grid container spacing={3}>
            {painCards.map((card) => (
              <Grid
                key={card.title}
                size={{ xs: 12, md: 4 }}
              >
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(239, 68, 68, 0.05)"
                        : "rgba(239, 68, 68, 0.02)",
                    border: "1px solid rgba(239, 68, 68, 0.12)",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        color: "error.main",
                        display: "flex",
                      }}
                    >
                      <AlertCircle size={24} />
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {card.desc}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Transition text */}
          <Typography variant="subtitle1" fontWeight={600} color="text.primary" textAlign="center" sx={{ pt: 2 }}>
            SmartPro replaces disconnected tools with a single digital procurement workflow.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProblemSection;
