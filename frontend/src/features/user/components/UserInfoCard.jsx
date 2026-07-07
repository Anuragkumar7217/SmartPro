import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function UserInfoCard({ user }) {
  if (!user) {
    return null;
  }

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          User Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Full Name
            </Typography>

            <Typography fontWeight={600}>
              {user.firstName} {user.lastName}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Email
            </Typography>

            <Typography fontWeight={600}>
              {user.email}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Role
            </Typography>

            <Box mt={0.5}>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={user.role.replaceAll("_", " ")}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Status
            </Typography>

            <Box mt={0.5}>
              <StatusChip
                status={
                  user.isActive
                    ? "ACTIVE"
                    : "INACTIVE"
                }
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Joined On
            </Typography>

            <Typography fontWeight={600}>
              {new Date(
                user.createdAt
              ).toLocaleDateString("en-IN")}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserInfoCard;