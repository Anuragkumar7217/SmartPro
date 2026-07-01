import { useMemo } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";

import WelcomeCard from "../../../components/common/WelcomeCard";

import PendingRequestsTable from "../../approval/components/PendingRequestsTable";
import usePendingRequests from "../../approval/hooks/usePendingRequests";

import PendingRequestsCard from "../manager/PendingRequestsCard";

function ManagerDashboard() {
  const {
    requests,
    loading,
    error,
  } = usePendingRequests();

  const latestRequests = useMemo(() => {
    return [...requests]
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [requests]);

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
    <Stack spacing={3}>
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <WelcomeCard />

      <Grid
        container
        spacing={3}
      >
        {/* Left Section */}

        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >
          <PendingRequestsTable
            requests={latestRequests}
            maxRows={5}
            enableActions={false}
          />
        </Grid>

        {/* Right Section */}

        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <PendingRequestsCard
            totalPending={requests.length}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ManagerDashboard;