import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";

import useDashboard from "../hooks/useDashboard";

import WelcomeCard from "../../../components/common/WelcomeCard";
import PRStats from "../../purchase-request/components/PRStats";
import RecentRequests from "../employee/RecentRequests";
import QuickActions from "../employee/QuickActions";
import RequestSummaryChart from "../employee/RequestSummaryChart";

function EmployeeDashboardPage() {
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
    <Stack spacing={2}>
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {/* Welcome */}

      <WelcomeCard />

      {/* Stats */}

      <PRStats
        requests={recentRequests}
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

export default EmployeeDashboardPage;