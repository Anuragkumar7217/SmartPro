import {
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";

function VendorFilters({
  search,
  onSearchChange,
  city,
  onCityChange,
  cities = [],
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
        placeholder="Search vendor..."
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 250,
        }}
      />

      <TextField
        select
        size="small"
        label="City"
        value={city}
        onChange={(event) =>
          onCityChange(event.target.value)
        }
        sx={{
          width: 220,
        }}
      >
        <MenuItem value="">
          All Cities
        </MenuItem>

        {cities.map((cityName) => (
          <MenuItem
            key={cityName}
            value={cityName}
          >
            {cityName}
          </MenuItem>
        ))}
      </TextField>
    </Paper>
  );
}

export default VendorFilters;