import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { FilePlus, UserCheck, Send, FileCheck, ArrowDown } from "lucide-react";

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
      <Stack spacing={8} alignItems="center">
        {/* Header */}
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 600 }}>
          <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Our Workflow
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.5px" }}>
            How it works
          </Typography>
        </Stack>

        {/* Steps Grid */}
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid
              key={step.title}
              size={{ xs: 12, md: 3 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Stack
                direction={{ xs: "row", md: "column" }}
                spacing={2.5}
                alignItems={{ xs: "flex-start", md: "center" }}
                textAlign={{ xs: "left", md: "center" }}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 4,
                  border: `1px dashed ${theme.palette.divider}`,
                  bgcolor: theme.palette.background.paper,
                  position: "relative",
                  zIndex: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: { md: "translateY(-4px)" },
                    boxShadow: { md: "0 10px 20px rgb(79, 70, 229, 0.5)" },
                  },
                  // Desktop horizontal timeline connector
                  "&::after": {
                    content: '""',
                    display: index === steps.length - 1 ? "none" : { xs: "none", md: "block" },
                    position: "absolute",
                    top: "48px", // Center height of the 48px circle (24px padding + 24px radius)
                    left: "calc(50% + 24px)",
                    right: "calc(-50% + 12px)", // Stretches to the next circle center
                    height: "2px",
                    bgcolor: "primary.main",
                    opacity: 0.2,
                    zIndex: -1,
                  }
                }}
              >
                {/* Step Bubble / Circle */}
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
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    flexShrink: 0,
                    boxShadow: "0 4px 10px rgba(79, 70, 229, 0.2)",
                  }}
                >
                  {step.num}
                </Box>

                {/* Text Details */}
                <Stack spacing={1} sx={{ pt: { xs: 0.5, md: 0 } }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.5 }}
                  >
                    {step.desc}
                  </Typography>
                </Stack>
              </Stack>

              {/* Mobile vertical timeline connector */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    alignItems: "center",
                    py: 2,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "2px",
                      height: "32px",
                      bgcolor: "primary.main",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "6px solid",
                        borderTopColor: "primary.main",
                      }
                    }}
                  />
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default HowItWorksSection;
