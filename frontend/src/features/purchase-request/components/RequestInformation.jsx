import {
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import TextInput from "../../auth/components/forms/TextInput";

function RequestInformation({
  formData,
  handleChange,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        borderRadius: 3,
        mb: 3,
        border: "1px solid #E5E7EB",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#4b43e2",
          mb: 3,
        }}
      >
        Request Information
      </Typography>

      <Stack spacing={3}>
        <TextInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <TextInput
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />

        <TextInput
          label="Reason"
          name="reason"
          multiline
          rows={3}
          value={formData.reason}
          onChange={handleChange}
        />
      </Stack>
    </Paper>
  );
}

export default RequestInformation;