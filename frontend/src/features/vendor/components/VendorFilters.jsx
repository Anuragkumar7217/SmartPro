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
        label="All Cities"
        value={city}
        onChange={(event) =>
          onCityChange(event.target.value)
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