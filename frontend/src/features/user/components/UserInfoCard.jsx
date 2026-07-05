import {
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function UserInfoCard({
  user,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        User Information
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Full Name
            </Typography>

            <Typography fontWeight={600}>
              {user.firstName}{" "}
              {user.lastName}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Email
            </Typography>

            <Typography>
              {user.email}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Current Role
            </Typography>

            <Typography fontWeight={600}>
              {user.role.replaceAll(
                "_",
                " "
              )}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Status
            </Typography>

            <StatusChip
              status={
                user.isActive
                  ? "ACTIVE"
                  : "INACTIVE"
              }
            />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Joined On
            </Typography>

            <Typography>
              {new Date(
                user.createdAt
              ).toLocaleDateString()}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserInfoCard;