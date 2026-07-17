import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { FilePlus, UserCheck, Send, FileCheck } from "lucide-react";

function HowItWorksSection() {
  const theme = useTheme();

  const steps = [
    {
      icon: FilePlus,
      num: "1",
      title: "Create PR",
      desc: "Employees raise a purchase request.",
    },
    {
      icon: UserCheck,
      num: "2",
      title: "Approve",
      desc: "Managers review and approve the request.",
    },
    {
      icon: Send,
      num: "3",
      title: "Collect Quotes",
      desc: "Purchase team sends RFQs to vendors.",
    },
    {
      icon: FileCheck,
      num: "4",
      title: "Issue PO",
      desc: "Select the best quotation and generate a purchase order.",
    },
  ];

  return (
    <Container id="how-it-works" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={6} alignItems="center">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 600 }}>
          <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            Our Workflow
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 800 }}>
            How it works
          </Typography>
        </Stack>

        {/* Steps Grid */}
        <Grid container spacing={4}>
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Grid
                key={step.title}
                size={{ xs: 12, md: 3 }}
              >
                <Stack
                  spacing={2.5}
                  alignItems="center"
                  textAlign="center"
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px dashed ${theme.palette.divider}`,
                    bgcolor: theme.palette.background.paper,
                    position: "relative",
                  }}
                >
                  {/* Step Bubble */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1rem",
                      fontWeight: 800,
                    }}
                  >
                    {step.num}
                  </Box>

                  {/* Text Details */}
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {step.desc}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}

export default HowItWorksSection;
