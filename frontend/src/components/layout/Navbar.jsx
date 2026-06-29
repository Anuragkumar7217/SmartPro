import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import {
  Bell,
  Menu,
} from "lucide-react";

import { useAuthStore } from "../../store/authStore";

function Navbar() {
  const user = useAuthStore((state) => state.user);

  const fullName = user
    ? `${user.firstName} ${user.lastName}`
    : "Guest User";

  const avatarLetter = user?.firstName?.charAt(0).toUpperCase() || "G";

  return (
    <Box
      sx={{
        height: 80,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        bgcolor: "rgba(255,255,255,.85)",
        backdropFilter: "blur(18px)",

        borderBottom: "1px solid #E5E7EB",

        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left */}

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <IconButton
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <Menu size={22} />
        </IconButton>

        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Welcome back 👋
          </Typography>
        </Box>
      </Stack>

      {/* Right */}

      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
      >
        <IconButton>
          <Bell size={20} />
        </IconButton>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              bgcolor: "#4F46E5",
              width: 46,
              height: 46,
              fontWeight: 700,
            }}
          >
            {avatarLetter}
          </Avatar>

          <Box>
            <Typography
              fontWeight={700}
              fontSize={15}
            >
              {fullName}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {user?.role || "User"}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navbar;