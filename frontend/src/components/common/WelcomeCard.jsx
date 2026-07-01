import {
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useAuthStore } from "../../store/authStore";
import { ROLES } from "../../utils/roles";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";

  return "Good evening";
}

function getWelcomeMessage(role) {
  switch (role) {
    case ROLES.MANAGER:
      return "You have purchase requests waiting for your review and approval.";

    case ROLES.PURCHASE_TEAM:
      return "Manage approved requests, create RFQs, and track procurement activities.";

    case ROLES.ADMIN:
      return "Monitor users, departments, and overall procurement system activity.";

    case ROLES.EMPLOYEE:
    default:
      return "Here's what's happening with your purchase requests today.";
  }
}

function WelcomeCard() {
  const user = useAuthStore((state) => state.user);

  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 3,
          md: 4,
        },
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        background:
          "linear-gradient(135deg,#FFFFFF 0%,#F8FAFC 100%)",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      <Stack spacing={1}>
        <Typography
          sx={{
            fontSize: {
              xs: 28,
              md: 34,
            },
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {getGreeting()}, {user?.firstName}! 👋
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            color: "#6B7280",
          }}
        >
          {getWelcomeMessage(user?.role)}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default WelcomeCard;