import {
  Box,
  MenuItem,
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
        placeholder="Search Vendor"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 250,
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
        label="City"
        value={city}
        onChange={(event) =>
          onCityChange(event.target.value)
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
    </Box>
  );
}

export default VendorFilters;