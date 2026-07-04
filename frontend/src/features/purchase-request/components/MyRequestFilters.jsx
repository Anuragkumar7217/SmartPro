import {
  Box,
  MenuItem,
  TextField,
} from "@mui/material";

function MyRequestFilters({
  search = "",
  status = "",
  onSearchChange = () => {},
  onStatusChange = () => {},
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
        placeholder="Search by PR Number or Title"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 300,
          "& .MuiOutlinedInput-root": {
            bgcolor: "#ffffff",

            "& fieldset": {
              borderColor: "#E5E7EB",
            },

            "&:hover fieldset": {
              borderColor: "#E5E7EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F46E5",
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
            bgcolor: "#ffffff",

            "& fieldset": {
              borderColor: "#E5E7EB",
            },

            "&:hover fieldset": {
              borderColor: "#E5E7EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F46E5",
            },
          },
        }}
      >
        <MenuItem value="">
          All Status
        </MenuItem>

        <MenuItem value="SUBMITTED">
          Submitted
        </MenuItem>

        <MenuItem value="APPROVED">
          Approved
        </MenuItem>

        <MenuItem value="REJECTED">
          Rejected
        </MenuItem>
      </TextField>
    </Box>
  );
}

export default MyRequestFilters;