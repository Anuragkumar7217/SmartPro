import {
  Box,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import { PackageCheck } from "lucide-react";

import SidebarItem from "./SidebarItem";

import { useAuthStore } from "../../store/authStore";
import { sidebarMenu } from "../../utils/sidebarMenu";

function Sidebar({
  mobileOpen,
  onClose,
}) {
  const user = useAuthStore((state) => state.user);

  const menuItems =
    sidebarMenu[user?.role] || [];

  const sidebarContent = (
    <Box
      sx={{
        width: 270,
        height: "100%",

        bgcolor: "#FFFFFF",

        borderRight: "1px solid #E5E7EB",

        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}

      <Box
        sx={{
          px: 2,
          py: 3,
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            background: "linear-gradient(135deg,#4F46E5,#6366F1)",
            boxShadow: "0 10px 24px rgba(79,70,229,.25)",
          }}
        >
          <PackageCheck size={26} />
        </Box>

        <Box sx={{ lineHeight: 1.1 }}>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-0.4px",
              color: "#111827",
            }}
          >
            SmartPro
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: "#6B7280",
              letterSpacing: "0.3px",
            }}
          >
            Procurement Suite
          </Typography>
        </Box>
        </Stack>
      </Box>

      {/* Menu */}

      <Stack
        spacing={1}
        sx={{
          flex: 1,
          p: 2.5,
          overflowY: "auto",
        }}
      >
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            {...item}
            onClick={onClose}
          />
        ))}
      </Stack>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}

      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },

          width: 270,

          flexShrink: 0,

          p: 3,
        }}
      >
        <Box
          sx={{
            height: "calc(100vh - 48px)",

            borderRadius: 6,

            overflow: "hidden",

            position: "sticky",
            top: 24,

            bgcolor: "#FFFFFF",

            border: "1px solid #E5E7EB",

            boxShadow:
              "0 8px 30px rgba(15,23,42,.06)",
          }}
        >
          {sidebarContent}
        </Box>
      </Box>

      {/* Mobile Drawer */}

      <Drawer
        open={mobileOpen}
        onClose={onClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },

          "& .MuiDrawer-paper": {
            width: 270,
            border: "none",
            boxShadow:
              "0 20px 40px rgba(15,23,42,.18)",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}

export default Sidebar;