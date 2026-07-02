import { TextField } from "@mui/material";

function RemarksField({
  value,
  onChange,
}) {
  return (
    <TextField
      label="Remarks"
      placeholder="Enter remarks (optional)"
      multiline
      rows={4}
      fullWidth
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
    />
  );
}

export default RemarksField;