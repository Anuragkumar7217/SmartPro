import { useState } from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { Eye, EyeOff } from "lucide-react";

function PasswordInput({
  label,
  name,
  value,
  onChange,
  error = false,
  helperText = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      size="medium"
      margin="normal"
      type={showPassword ? "text" : "password"}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          sx: {
            bgcolor: "#e8f0fe", 
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword}>
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
}

export default PasswordInput;