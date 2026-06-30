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

        position: "sticky",
        top: 0,

        boxShadow: "2px 0 10px rgba(15,23,42,.03)",
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
              width: 54,
              height: 54,
              borderRadius: 3,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#FFFFFF",

              background:
                "linear-gradient(135deg,#2563EB,#7C3AED)",

              boxShadow:
                "0 8px 20px rgba(79,70,229,.25)",
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

      <Stack
        flex={1}
        spacing={0.5}
      >
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            {...item}
          />
        ))}
      </Stack>

      <Divider sx={{ mt: 3 }} />

      <Typography
        variant="caption"
        color="text.secondary"
        textAlign="center"
        sx={{
          mt: 2,
        }}
      >
        SmartPro v1.0
      </Typography>
    </Box>
  );
}

export default Sidebar;