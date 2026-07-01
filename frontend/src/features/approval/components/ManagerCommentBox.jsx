import { forwardRef } from "react";

import {
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const ManagerCommentBox = forwardRef(
  (
    {
      value,
      onChange,
      error = false,
      shake = false,
    },
    ref
  ) => {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          border: "1px solid",
          borderColor: error
            ? "error.main"
            : "divider",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Manager Comment{" "}
          <Typography
            component="span"
            color="error"
          >
            *
          </Typography>
        </Typography>

        <TextField
          inputRef={ref}
          fullWidth
          required
          multiline
          minRows={3}
          error={error}
          helperText={
            error
              ? "Manager comment is required."
              : "Please provide a reason for your decision."
          }
          placeholder="Example: Budget approved for Q3 procurement."
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          sx={{
            "@keyframes shake": {
              "0%": {
                transform: "translateX(0)",
              },
              "20%": {
                transform: "translateX(-6px)",
              },
              "40%": {
                transform: "translateX(6px)",
              },
              "60%": {
                transform: "translateX(-6px)",
              },
              "80%": {
                transform: "translateX(6px)",
              },
              "100%": {
                transform: "translateX(0)",
              },
            },

            animation: shake
              ? "shake .6s ease"
              : "none",
          }}
        />
      </Paper>
    );
  }
);

ManagerCommentBox.displayName =
  "ManagerCommentBox";

export default ManagerCommentBox;