import {
  Paper,
  TextField,
} from "@mui/material";

function QuotationFilters({
  search,
  onSearchChange,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <TextField
        fullWidth
        placeholder="Search RFQ..."
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
      />
    </Paper>
  );
}

export default QuotationFilters;