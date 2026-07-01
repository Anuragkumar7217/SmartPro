import TextField from "@mui/material/TextField";

function TextInput({
  label,
  name,
  value,
  onChange,
  error = false,
  helperText = "",
  ...props
}) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      margin="none"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
}

export default TextInput;