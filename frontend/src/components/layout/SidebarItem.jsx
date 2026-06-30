import { NavLink } from "react-router-dom";

import {
  Box,
  Typography,
} from "@mui/material";

function SidebarItem({
  icon: Icon,
  label,
  to,
}) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      {({ isActive }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,

            px: 2,
            py: 1.6,
            mb: 1,

            borderRadius: 3,

            transition: "all .2s ease",

            bgcolor: isActive
              ? "#4F46E5"
              : "transparent",

            color: isActive
              ? "#FFFFFF"
              : "#4B5563",

            boxShadow: isActive
              ? "0 8px 20px rgba(79,70,229,.22)"
              : "none",

            "&:hover": {
              bgcolor: isActive
                ? "#4F46E5"
                : "#F5F3FF",

              color: isActive
                ? "#FFFFFF"
                : "#4F46E5",

              transform: "translateX(4px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={20} />
          </Box>

          <Typography
            fontWeight={600}
            fontSize={15}
          >
            {label}
          </Typography>
        </Box>
      )}
    </NavLink>
  );
}

export default SidebarItem;