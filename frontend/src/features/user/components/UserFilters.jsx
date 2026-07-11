import {
  Box,
  MenuItem,
  TextField,
} from "@mui/material";

import { ROLES } from "../../../utils/roles";

function UserFilters({
  search,
  onSearchChange,
  role,
  onRoleChange,
  status,
  onStatusChange,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Search User"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 250,

          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",

            "& fieldset": {
              borderColor: "divider",
            },

            "&:hover fieldset": {
              borderColor: "primary.main",
            },

            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />

      <TextField
        select
        size="small"
        label="Role"
        value={role}
        onChange={(event) =>
          onRoleChange(event.target.value)
        }
        sx={{
          width: 220,

          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",

            "& fieldset": {
              borderColor: "divider",
            },

            "&:hover fieldset": {
              borderColor: "primary.main",
            },

            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      >
        <MenuItem value="">
          All Roles
        </MenuItem>

        <MenuItem value={ROLES.ADMIN}>
          Admin
        </MenuItem>

        <MenuItem value={ROLES.EMPLOYEE}>
          Employee
        </MenuItem>

        <MenuItem value={ROLES.MANAGER}>
          Manager
        </MenuItem>

        <MenuItem
          value={ROLES.PURCHASE_TEAM}
        >
          Purchase Team
        </MenuItem>
      </TextField>

      <TextField
        select
        size="small"
        label="Status"
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value)
        }
        sx={{
          width: 220,

          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",

            "& fieldset": {
              borderColor: "divider",
            },

            "&:hover fieldset": {
              borderColor: "primary.main",
            },

            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      >
        <MenuItem value="">
          All Status
        </MenuItem>

        <MenuItem value="ACTIVE">
          Active
        </MenuItem>

        <MenuItem value="INACTIVE">
          Inactive
        </MenuItem>
      </TextField>
    </Box>
  );
}

export default UserFilters;