import { NavLink } from "react-router-dom";

import {
  Box,
  Typography,
} from "@mui/material";

function SidebarItem({
  icon: Icon,
  label,
  to,
  onClick,
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
          onClick={onClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,

            px: 2.5,
            py: 1.7,

            borderRadius: 4,

            cursor: "pointer",

            transition: "all .25s ease",

            background: isActive
              ? "linear-gradient(135deg,#4F46E5,#6366F1)"
              : "transparent",

            color: isActive
              ? "#FFFFFF"
              : "text.secondary",

            border: isActive
              ? "none"
              : "1px solid transparent",

            boxShadow: isActive
              ? "0 10px 24px rgba(79,70,229,.25)"
              : "none",

            "&:hover": {
              background: isActive
                ? "linear-gradient(135deg,#4F46E5,#6366F1)"
                : "action.hover",

              color: isActive
                ? "#FFFFFF"
                : "primary.main",

              transform: "translateX(4px)",

              boxShadow: isActive
                ? "0 12px 28px rgba(79,70,229,.30)"
                : "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              minWidth: 22,
            }}
          >
            <Icon size={20} />
          </Box>

          <Typography
            sx={{
              fontSize: 15,
              fontWeight: isActive ? 700 : 600,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </Typography>
        </Box>
      )}
    </NavLink>
  );
}

export default SidebarItem;