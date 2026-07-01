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

            bgcolor: isActive
              ? "#4F46E5"
              : "transparent",

            color: isActive
              ? "#FFFFFF"
              : "#4B5563",

            border: isActive
              ? "none"
              : "1px solid transparent",

            boxShadow: isActive
              ? "0 10px 24px rgba(79,70,229,.25)"
              : "none",

            "&:hover": {
              bgcolor: isActive
                ? "#4338CA"
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