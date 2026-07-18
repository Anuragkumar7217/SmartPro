import { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Stack, Typography, Button, Divider, useTheme } from "@mui/material";
import { Users, Shield, Clipboard, Award, Check, X, ArrowRight } from "lucide-react";

// Mock Browser Header
function MockWindowHeader({ title }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: 2.5,
        py: 1.5,
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) => theme.palette.mode === "dark" ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.02)",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EF4444" }} />
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F59E0B" }} />
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#10B981" }} />
      </Stack>
      <Typography variant="caption" color="text.secondary" fontWeight={600}>
        {title}
      </Typography>
      <Box sx={{ width: 38 }} />
    </Stack>
  );
}

// Sub-Mockups
function EmployeeMockup() {
  const theme = useTheme();
  const checklists = [
    { label: "PR Draft Created", checked: true },
    { label: "Submitted for Approval", checked: true },
    { label: "Manager Review", checked: false },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2.5}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" fontWeight={700} color="text.primary">
            New Purchase Request #PR-402
          </Typography>
          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 99,
              bgcolor: "warning.main",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            Pending Review
          </Box>
        </Stack>

        <Box
          sx={{
            p: 2,
            borderRadius: 2.5,
            bgcolor: theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: theme.palette.mode === "dark" ? "none" : "0 4px 12px rgba(15, 23, 42, 0.03)",
          }}
        >
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" color="text.secondary">Item</Typography>
              <Typography variant="caption" fontWeight={600} color="text.primary">Dell UltraSharp 34" Monitor</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" color="text.secondary">Estimate</Typography>
              <Typography variant="caption" fontWeight={600} color="primary.main">$799.00</Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Vertical Progress Stepper */}
        <Stack spacing={1.5}>
          {checklists.map((c) => (
            <Stack key={c.label} direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: c.checked ? "success.main" : "transparent",
                  border: c.checked ? "none" : "2px solid",
                  borderColor: c.checked ? "none" : "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {c.checked && <Check size={12} strokeWidth={3} />}
              </Box>
              <Typography variant="caption" color={c.checked ? "text.primary" : "text.secondary"} fontWeight={c.checked ? 600 : 400}>
                {c.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

function ManagerMockup() {
  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2.5}>
        <Stack spacing={0.5}>
          <Typography variant="caption" color="text.secondary">Jane Doe • Engineering</Typography>
          <Typography variant="subtitle2" fontWeight={700}>
            AWS Cloud Credits – $1,500.00
          </Typography>
        </Stack>

        <Typography variant="caption" color="text.secondary" sx={{ fontStyle: "italic" }}>
          "Required to scale our staging database server for the upcoming load tests."
        </Typography>

        <Box sx={{ borderBottom: "1px solid", borderColor: "divider" }} />

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<X size={14} />}
            sx={{ flex: 1, borderRadius: 2 }}
          >
            Reject
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<Check size={14} />}
            sx={{ flex: 1, borderRadius: 2 }}
          >
            Approve
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

function PurchaseTeamMockup() {
  const theme = useTheme();
  const bids = [
    { vendor: "TechSupply Corp", amount: "$4,800", best: false },
    { vendor: "ByteSize Inc", amount: "$4,500", best: true },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2.5}>
        <Typography variant="subtitle2" fontWeight={700}>
          RFQ-2026-89 • Office Laptops
        </Typography>

        <Stack spacing={1.5}>
          {bids.map((bid) => (
            <Stack
              key={bid.vendor}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: bid.best ? "primary.main" : "#E2E8F0",
                bgcolor: bid.best
                  ? (theme.palette.mode === "dark" ? "rgba(79, 70, 229, 0.05)" : "#EEF2FF")
                  : (theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF"),
              }}
            >
              <Stack spacing={0.2}>
                <Typography variant="caption" fontWeight={600} color="text.primary">
                  {bid.vendor}
                </Typography>
                {bid.best && (
                  <Typography variant="caption" color="primary.main" fontWeight={700} sx={{ fontSize: "0.65rem", textTransform: "uppercase" }}>
                    Best Bid
                  </Typography>
                )}
              </Stack>
              <Typography variant="caption" fontWeight={700} color="text.primary">
                {bid.amount}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowRight size={14} />}
          sx={{ borderRadius: 2, mt: 1 }}
        >
          Select Vendor & Issue PO
        </Button>
      </Stack>
    </Box>
  );
}

function AdminMockup() {
  const theme = useTheme();
  const rules = [
    { label: "Auto-trigger RFQ on Approval", active: true },
    { label: "Multi-vendor quote enforced", active: true },
    { label: "VP Approval required > $10,000", active: false },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2.5}>
        <Typography variant="subtitle2" fontWeight={700}>
          Workflow & Compliance Rules
        </Typography>

        <Stack spacing={1.5}>
          {rules.map((rule) => (
            <Stack
              key={rule.label}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 1.2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF",
              }}
            >
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                {rule.label}
              </Typography>
              <Box
                sx={{
                  width: 32,
                  height: 18,
                  borderRadius: 9,
                  bgcolor: rule.active ? "primary.main" : "divider",
                  p: 0.2,
                  display: "flex",
                  justifyContent: rule.active ? "flex-end" : "flex-start",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ width: 14, height: 14, borderRadius: "50%", bgcolor: "#fff" }} />
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

function RoleBasedDashboards() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const roles = [
    {
      icon: Users,
      title: "Employee Dashboard",
      short: "Employee",
      desc: "Raise and track purchase requests in real-time.",
      windowTitle: "smartpro.io/employee/dashboard",
      mockup: EmployeeMockup,
    },
    {
      icon: Shield,
      title: "Manager Dashboard",
      short: "Manager",
      desc: "Instantly review, approve, or reject pending requests.",
      windowTitle: "smartpro.io/manager/approvals",
      mockup: ManagerMockup,
    },
    {
      icon: Clipboard,
      title: "Purchase Team Dashboard",
      short: "Procurement",
      desc: "Manage RFQs, compare incoming quotes, and issue POs.",
      windowTitle: "smartpro.io/procurement/rfq",
      mockup: PurchaseTeamMockup,
    },
    {
      icon: Award,
      title: "Admin Dashboard",
      short: "Admin",
      desc: "Configure system settings, users, and approval hierarchies.",
      windowTitle: "smartpro.io/admin/workflows",
      mockup: AdminMockup,
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, roles.length]);

  const handleTabSelect = (idx) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };

  const ActiveMockup = roles[activeIndex].mockup;

  return (
    <Box
      id="dashboards"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.01)" : "rgba(248, 250, 252, 0.5)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 600, mx: "auto" }}>
            <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Dedicated Dashboards
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.5px" }}>
              A dashboard built for every role
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
              Every role gets a dedicated workspace with only the actions and insights relevant to them.
            </Typography>
          </Stack>

          {/* Interactive Mockup Grid */}
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            {/* Tabs Selector Column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                {roles.map((role, idx) => {
                  const Icon = role.icon;
                  const isActive = idx === activeIndex;
                  const RoleMockup = role.mockup;

                  return (
                    <Stack key={role.title} spacing={0}>
                      <Box
                        onClick={() => handleTabSelect(idx)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          cursor: "pointer",
                          border: "1px solid",
                          borderLeftWidth: "3px",
                          borderColor: isActive
                            ? (theme.palette.mode === "dark" ? "rgba(79, 70, 229, 0.25)" : "rgba(79, 70, 229, 0.15)")
                            : "transparent",
                          borderLeftColor: isActive ? "primary.main" : "transparent",
                          bgcolor: isActive
                            ? (theme.palette.mode === "dark" ? "rgba(79, 70, 229, 0.05)" : "rgba(79, 70, 229, 0.06)")
                            : "transparent",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: isActive
                              ? (theme.palette.mode === "dark" ? "rgba(79, 70, 229, 0.08)" : "rgba(79, 70, 229, 0.08)")
                              : (theme.palette.mode === "dark" ? "rgba(255,255,255,0.02)" : "rgba(79, 70, 229, 0.02)"),
                          }
                        }}
                      >
                        <Stack direction="row" spacing={2.5} alignItems="flex-start">
                          <Box
                            sx={{
                              p: 1,
                              borderRadius: 2,
                              bgcolor: isActive
                                ? "primary.main"
                                : (theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(15, 23, 42, 0.05)"),
                              color: isActive ? "#fff" : "text.secondary",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <Icon size={20} />
                          </Box>
                          <Stack spacing={0.5}>
                            <Typography variant="subtitle1" fontWeight={700} color={isActive ? "text.primary" : "text.secondary"}>
                              {role.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                              {role.desc}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      {/* Mobile inline mockup box (Accordion Style) */}
                      {isActive && (
                        <Box
                          sx={{
                            display: { xs: "block", md: "none" },
                            mt: 1.5,
                            mb: 2,
                            borderRadius: 4,
                            overflow: "hidden",
                            border: "1px solid",
                            borderColor: "divider",
                            bgcolor: theme.palette.background.paper,
                            boxShadow: (theme) => theme.palette.mode === "dark"
                              ? "0 15px 30px rgba(0,0,0,0.3)"
                              : "0 15px 30px rgba(79, 70, 229, 0.05)",
                            animation: "slideDown 0.3s ease-out",
                            "@keyframes slideDown": {
                              "0%": { opacity: 0, transform: "translateY(-10px)" },
                              "100%": { opacity: 1, transform: "translateY(0)" },
                            }
                          }}
                        >
                          <MockWindowHeader title={role.windowTitle} />
                          <Box
                            sx={{
                              minHeight: 200,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              bgcolor: theme.palette.mode === "dark" ? "#121212" : "#F8FAFC",
                            }}
                          >
                            <RoleMockup />
                          </Box>
                        </Box>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>

            {/* Mockup Display Column */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: theme.palette.mode === "dark" ? "divider" : "rgba(15, 23, 42, 0.08)",
                  bgcolor: theme.palette.background.paper,
                  boxShadow: theme.palette.mode === "dark"
                    ? "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)"
                    : "0 30px 60px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.02)",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                {/* Browser bar */}
                <MockWindowHeader title={roles[activeIndex].windowTitle} />

                {/* Live Mockup UI container */}
                <Box
                  sx={{
                    minHeight: 280,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: theme.palette.mode === "dark" ? "#121212" : "#F8FAFC",
                  }}
                >
                  <Box
                    key={activeIndex}
                    sx={{
                      animation: "fadeIn 0.5s ease-in-out",
                      "@keyframes fadeIn": {
                        "0%": { opacity: 0, transform: "translateY(10px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" },
                      }
                    }}
                  >
                    <ActiveMockup />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default RoleBasedDashboards;
