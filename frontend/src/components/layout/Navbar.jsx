import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import {
  Menu as MenuIcon,
  User,
  LogOut,
} from "lucide-react";

import { useAuthStore } from "../../store/authStore";
import { sidebarMenu } from "../../utils/sidebarMenu";

import ProfileDialog from "../../features/profile/components/ProfileDialog";

function Navbar({ isMobile, onMenuClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [anchorEl, setAnchorEl] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const fullName = user
    ? `${user.firstName} ${user.lastName}`
    : "Guest User";

  const avatarLetter =
    user?.firstName?.charAt(0)?.toUpperCase() || "G";

  const menuItems = sidebarMenu[user?.role] || [];

  const activeItem = menuItems.find((item) =>
    location.pathname.startsWith(item.to)
  );

  const pageTitle = activeItem?.label || "Dashboard";

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const handleProfile = () => {
    handleMenuClose();
    setProfileOpen(true);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 24,
          zIndex: 1100,
          height: 72,
          px: { xs: 2, sm: 3, md: 4 },
          borderRadius: 5,
          bgcolor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          boxShadow: "0 8px 30px rgba(15,23,42,.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* LEFT */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            flex: 1,
            minWidth: 0,
            height: "100%",
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 24, md: 30 },
                fontWeight: 700,
                color: "#443faa",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.2,
              }}
            >
              {pageTitle}
            </Typography>
          </Box>
        </Stack>

        {/* RIGHT */}
        <Stack
          direction="row"
          spacing={{ xs: 0.5, sm: 2 }}
          alignItems="center"
        >
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            onClick={handleMenuOpen}
            sx={{
              cursor: "pointer",
              px: { xs: 0, sm: 1.5 },
              py: 1,
              borderRadius: 4,
              transition: ".25s",
              "&:hover": {
                bgcolor: "#F5F3FF",
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#4F46E5",
                width: { xs: 40, sm: 46 },
                height: { xs: 40, sm: 46 },
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {avatarLetter}
            </Avatar>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
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
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            p: 1,
            minWidth: 220,
            borderRadius: 4,
            border: "1px solid #E5E7EB",
            boxShadow:
              "0 18px 40px rgba(15,23,42,.12)",
          },
        }}
      >
        <MenuItem
          onClick={handleProfile}
          sx={{
            borderRadius: 3,
            py: 1.25,
            px: 1.5,
            mx: 2,
            gap: 1.5,
            fontSize: 15,
            fontWeight: 500,
            color: "#374151",
            transition: "all .2s ease",
            "&:hover": {
              bgcolor: "#EEF2FF",
              color: "#4F46E5",
            },
            "& svg": {
              color: "#6B7280",
            },
            "&:hover svg": {
              color: "#4F46E5",
            },
          }}
        >
          <User size={18} />
          Profile
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          sx={{
            mt: 0.5,
            borderRadius: 3,
            py: 1.25,
            px: 1.5,
            mx: 2,
            gap: 1.5,
            fontSize: 15,
            fontWeight: 500,
            color: "#374151",
            transition: "all .2s ease",
            "&:hover": {
              bgcolor: "#EEF2FF",
              color: "#4F46E5",
            },
            "& svg": {
              color: "#6B7280",
            },
            "&:hover svg": {
              color: "#4F46E5",
            },
          }}
        >
          <LogOut size={18} />
          Logout
        </MenuItem>
      </Menu>

      <ProfileDialog
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
}

export default Navbar;