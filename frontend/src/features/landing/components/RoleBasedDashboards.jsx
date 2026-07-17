import { Box, Card, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Users, Shield, Clipboard, Award } from "lucide-react";

function RoleBasedDashboards() {
  const theme = useTheme();

  const roles = [
    { icon: Users, title: "Employee Dashboard", desc: "Raise and track purchase requests in real-time." },
    { icon: Shield, title: "Manager Dashboard", desc: "Instantly review, approve, or reject pending requests." },
    { icon: Clipboard, title: "Purchase Team Dashboard", desc: "Manage RFQs, compare incoming quotes, and issue POs." },
    { icon: Award, title: "Admin Dashboard", desc: "Configure system settings, users, and approval hierarchies." },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5} alignItems="center">
          {/* Header */}
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 600 }}>
            <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Dedicated Dashboards
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 800 }}>
              A dashboard built for every role
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Every role gets a dedicated dashboard with only the actions and insights relevant to them.
            </Typography>
          </Stack>

          {/* Cards Grid */}
          <Grid container spacing={3}>
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <Grid
                  key={role.title}
                  size={{ xs: 12, md: 3 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: theme.palette.background.paper,
                    }}
                  >
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          bgcolor: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Icon size={25} />
                      </Box>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                      >
                        {role.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {role.desc}
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
  );
}

export default RoleBasedDashboards;
