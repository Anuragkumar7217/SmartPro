import {
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";

function RFQFilters({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Search by PR Number, Title or Employee"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 300,
        }}
      />

      <TextField
        select
        size="small"
        label="Sort By"
        value={sortBy}
        onChange={(event) =>
          onSortChange(event.target.value)
        }
        sx={{
          width: 180,
        }}
      >
        <MenuItem value="latest">
          Latest
        </MenuItem>

        <MenuItem value="oldest">
          Oldest
        </MenuItem>
      </TextField>
    </Paper>
  );
}

export default RFQFilters;