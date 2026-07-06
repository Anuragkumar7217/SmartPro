import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import {
  Users,
  ClipboardList,
  FileText,
  Scale,
  ArrowRight,
} from "lucide-react";

function AdminQuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Manage Users",
      description: "Manage user roles and account status.",
      icon: <Users size={22} />,
      color: "#4F46E5",
      bg: "#EEF2FF",
      path: "/userManagement",
    },
    {
      title: "Purchase Orders",
      description: "Create and issue purchase orders.",
      icon: <ClipboardList size={22} />,
      color: "#EA580C",
      bg: "#FFF7ED",
      path: "/purchase-orders",
    },
    {
      title: "RFQs",
      description: "View all Request For Quotations.",
      icon: <FileText size={22} />,
      color: "#2563EB",
      bg: "#EFF6FF",
      path: "/rfqs",
    },
    {
      title: "Quotations",
      description: "Compare vendor quotations.",
      icon: <Scale size={22} />,
      color: "#16A34A",
      bg: "#F0FDF4",
      path: "/quotations",
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        {actions.map((action) => (
          <Grid
            key={action.title}
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 2.5,
                height: "100%",
                borderRadius: 4,
                transition: ".25s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 28px rgba(0,0,0,.08)",
                },
              }}
              onClick={() =>
                navigate(action.path)
              }
            >
              <Stack
                height="100%"
                justifyContent="space-between"
              >
                <Stack spacing={2}>
                  <Avatar
                    sx={{
                      bgcolor: action.bg,
                      color: action.color,
                      width: 52,
                      height: 52,
                    }}
                  >
                    {action.icon}
                  </Avatar>

                  <Typography
                    fontWeight={700}
                    fontSize={18}
                  >
                    {action.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    minHeight={42}
                  >
                    {action.description}
                  </Typography>
                </Stack>

                <Button
                  sx={{
                    mt: 3,
                    alignSelf: "flex-start",
                    px: 0,
                  }}
                  endIcon={<ArrowRight size={18} />}
                >
                  Open
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default AdminQuickActions;