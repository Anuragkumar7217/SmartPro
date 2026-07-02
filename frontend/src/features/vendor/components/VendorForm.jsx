import {
  Stack,
  TextField,
} from "@mui/material";

function VendorForm({
  formData,
  onChange,
}) {
  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        required
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={onChange}
      />

      <TextField
        fullWidth
        required
        label="Contact Person"
        name="contactPerson"
        value={formData.contactPerson}
        onChange={onChange}
      />

      <TextField
        fullWidth
        required
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />

      <TextField
        fullWidth
        required
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
      />

      <TextField
        fullWidth
        required
        multiline
        minRows={3}
        label="Address"
        name="address"
        value={formData.address}
        onChange={onChange}
      />
    </Stack>
  );
}

export default VendorForm;