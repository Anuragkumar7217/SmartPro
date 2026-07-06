import { useNavigate } from "react-router-dom";

import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  ClipboardList,
  ArrowRight,
  UserX,
} from "lucide-react";

function AdminPendingActions({ pendingActions }) {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Draft Purchase Orders",
      value: pendingActions.draftPurchaseOrders,
      description:
        "Purchase Orders waiting to be issued.",
      icon: (
        <ClipboardList
          size={28}
          color="#ED6C02"
        />
      ),
      button: "View Purchase Orders",
      path: "/purchase-orders",
    },
    {
      title: "Inactive Users",
      value: pendingActions.inactiveUsers,
      description:
        "Users waiting for activation.",
      icon: (
        <UserX
          size={28}
          color="#D32F2F"
        />
      ),
      button: "Manage Users",
      path: "/userManagement",
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
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ mb: 3 }}
      >
        Pending Actions
      </Typography>

      <Grid container spacing={2}>
        {actions.map((action) => (
          <Grid
            key={action.title}
            size={{
              xs: 12,
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 2.5,
                borderRadius: 3,
                transition:
                  "all .25s ease",
                "&:hover": {
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,.08)",
                  transform:
                    "translateY(-2px)",
                },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  {action.icon}

                  <Stack spacing={0.5}>
                    <Typography
                      fontWeight={700}
                    >
                      {action.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {action.description}
                    </Typography>
                  </Stack>
                </Stack>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {action.value}
                </Typography>
              </Stack>

              <Button
                sx={{ mt: 2 }}
                endIcon={
                  <ArrowRight size={18} />
                }
                onClick={() =>
                  navigate(action.path)
                }
              >
                {action.button}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default AdminPendingActions;