import {
  Box,
  TextField,
} from "@mui/material";

function QuotationRFQFilters({
  search,
  onSearchChange,
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
        placeholder="Search by RFQ / PR Number"
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
          },
        }}
      />
    </Box>
  );
}

export default QuotationRFQFilters;