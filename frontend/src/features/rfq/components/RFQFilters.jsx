import {
  Box,
  MenuItem,
  TextField,
} from "@mui/material";

function RFQFilters({
  search,
  onSearchChange,
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
        placeholder="Search by RFQ Number"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: {
            xs: "100%",
            sm: 260,
            md: 300,
          },

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
          All
        </MenuItem>

        <MenuItem value="DRAFT">
          Draft
        </MenuItem>

        <MenuItem value="ISSUED">
          Issued
        </MenuItem>
      </TextField>
    </Box>
  );
}

export default RFQFilters;