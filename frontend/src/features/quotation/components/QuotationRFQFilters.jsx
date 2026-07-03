import { Card, Stack, TextField } from "@mui/material";

function QuotationRFQFilters({
  search,
  onSearchChange,
}) {
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <Stack>
        <TextField
          fullWidth
          label="Search RFQ / PR Number"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
        />
      </Stack>
    </Card>
  );
}

export default QuotationRFQFilters;