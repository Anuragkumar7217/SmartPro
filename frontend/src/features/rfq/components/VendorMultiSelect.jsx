import {
  Autocomplete,
  TextField,
} from "@mui/material";

function VendorMultiSelect({
  vendors = [],
  value = [],
  onChange,
  loading = false,
}) {
  return (
    <Autocomplete
      multiple
      options={vendors}
      loading={loading}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      getOptionLabel={(option) =>
        option.companyName || ""
      }
      isOptionEqualToValue={(option, value) =>
        option._id === value._id
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Vendors"
          placeholder="Choose one or more vendors"
        />
      )}
    />
  );
}

export default VendorMultiSelect;