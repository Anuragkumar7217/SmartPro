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
            py: 1.5,
            mb: 1,
            borderRadius: 2,
            transition: ".25s",

            bgcolor: isActive
              ? "#4F46E5"
              : "transparent",

            color: isActive
              ? "#fff"
              : "#374151",

            "&:hover": {
              bgcolor: isActive
                ? "#4F46E5"
                : "#F3F4F6",
            },
          }}
        >
          <Icon size={20} />

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