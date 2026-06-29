import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import {
  PackageCheck,
  LayoutDashboard,
  FileText,
  Building2,
  ClipboardList,
  ReceiptText,
  ShoppingCart,
  UserCircle,
  LogOut,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const menuItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Purchase Requests",
    to: "/purchase-requests",
    icon: FileText,
  },
  {
    label: "Vendors",
    to: "/vendors",
    icon: Building2,
  },
  {
    label: "RFQs",
    to: "/rfqs",
    icon: ClipboardList,
  },
  {
    label: "Quotations",
    to: "/quotations",
    icon: ReceiptText,
  },
  {
    label: "Purchase Orders",
    to: "/purchase-orders",
    icon: ShoppingCart,
  },
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "#FFFFFF",
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        px: 3,
        py: 4,
      }}
    >
      {/* Logo */}

      <Box mb={5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED)",
            }}
          >
            <PackageCheck size={28} />
          </Box>

          <Box>
            <Typography
              fontWeight={800}
              fontSize={24}
            >
              SmartPro
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Enterprise Suite
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Menu */}

      <Stack flex={1}>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            {...item}
          />
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Bottom */}

      <SidebarItem
        icon={UserCircle}
        label="Profile"
        to="/profile"
      />

      <SidebarItem
        icon={LogOut}
        label="Logout"
        to="/logout"
      />
    </Box>
  );
}

export default Sidebar;