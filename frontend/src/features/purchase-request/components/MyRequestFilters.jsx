import {
  Grid,
  MenuItem,
  Paper,
} from "@mui/material";

import TextInput from "../../auth/components/forms/TextInput";

function MyRequestFilters({
  search = "",
  status = "",
  onSearchChange = () => {},
  onStatusChange = () => {},
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <TextInput
            label="Search"
            placeholder="Search by PR Number or Title"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <TextInput
            select
            label="Status"
            value={status}
            onChange={(e) =>
              onStatusChange(e.target.value)
            }
          >
            <MenuItem value="">
              All Status
            </MenuItem>

            <MenuItem value="SUBMITTED">
              Submitted
            </MenuItem>

            <MenuItem value="APPROVED">
              Approved
            </MenuItem>

            <MenuItem value="REJECTED">
              Rejected
            </MenuItem>
          </TextInput>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MyRequestFilters;