import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";

import useDashboard from "../hooks/useDashboard";

import WelcomeCard from "../components/WelcomeCard";
import DashboardStats from "../components/DashboardStats";
import RecentRequests from "../components/RecentRequests";
import QuickActions from "../components/QuickActions";
import RequestSummaryChart from "../components/RequestSummaryChart";

function DashboardPage() {
  const {
    loading,
    error,
    stats,
    recentRequests,
  } = useDashboard();

  if (loading) {
    return (
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Stack spacing={4}>
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {/* Welcome */}

      <WelcomeCard />

      {/* Stats */}

      <DashboardStats
        stats={stats}
      />

      {/* Bottom Section */}

      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >
          <RecentRequests
            requests={recentRequests}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <Stack spacing={3}>
            <QuickActions />

            <RequestSummaryChart
              stats={stats}
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default DashboardPage;