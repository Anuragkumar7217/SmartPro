import {
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Clock3 } from "lucide-react";

function RecentActivity({ activities = [] }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15,23,42,.05)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Recent Activity
      </Typography>

      <Stack spacing={2}>
        {activities.map((activity) => (
          <Stack
            key={activity.id}
            direction="row"
            spacing={2}
            alignItems="flex-start"
          >
            <Box
              sx={{
                mt: 0.5,
                color: "#4F46E5",
              }}
            >
              <Clock3 size={18} />
            </Box>

            <Box>
              <Typography fontWeight={600}>
                {activity.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {activity.time}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

export default RecentActivity;