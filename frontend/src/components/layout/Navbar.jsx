import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import { Menu as MenuIcon } from "lucide-react";

import { useAuthStore } from "../../store/authStore";

function Navbar({
  isMobile,
  onMenuClick,
}) {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [anchorEl, setAnchorEl] = useState(null);

  const fullName = user
    ? `${user.firstName} ${user.lastName}`
    : "Guest User";

  const avatarLetter =
    user?.firstName?.charAt(0)?.toUpperCase() || "G";

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <Box
        sx={{
          height: 72,

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          borderRadius: 5,

          bgcolor: "#FFFFFF",

          border: "1px solid #E5E7EB",

          boxShadow:
            "0 8px 30px rgba(15,23,42,.06)",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          gap: 1,
          overflow: "hidden",

          flexShrink: 0,
        }}
      >
        {/* Left */}

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            minWidth: 0,
            flex: 1,
          }}
        >
          {isMobile && (
            <IconButton
              onClick={onMenuClick}
              sx={{
                color: "#4F46E5",
                flexShrink: 0,
              }}
            >
              <MenuIcon size={24} />
            </IconButton>
          )}

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 24,
                  md: 30,
                },

                fontWeight: 700,

                color: "#111827",

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Dashboard
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  sm: 14,
                },

                color: "#6B7280",

                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Welcome back 👋
            </Typography>
          </Box>
        </Stack>

        {/* Right */}

        <Stack
          direction="row"
          spacing={{
            xs: 0.5,
            sm: 2,
          }}
          alignItems="center"
          flexShrink={0}
        >

          <Stack
            direction="row"
            spacing={{
              xs: 1,
              sm: 2,
            }}
            alignItems="center"
            onClick={handleMenuOpen}
            sx={{
              cursor: "pointer",

              px: {
                xs: 0,
                sm: 1.5,
              },

              py: 1,

              borderRadius: 4,

              flexShrink: 0,

              transition: ".25s",

              "&:hover": {
                bgcolor: "#F5F3FF",
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#4F46E5",

                width: {
                  xs: 40,
                  sm: 46,
                },

                height: {
                  xs: 40,
                  sm: 46,
                },

                fontWeight: 700,

                flexShrink: 0,
              }}
            >
              {avatarLetter}
            </Avatar>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {fullName}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#6B7280",
                  textTransform: "capitalize",
                }}
              >
                {user?.role}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfile}>
          Profile
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;