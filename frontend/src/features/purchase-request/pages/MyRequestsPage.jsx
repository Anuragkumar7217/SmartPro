import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

import useMyRequests from "../hooks/useMyRequests";

import MyRequestStats from "../components/MyRequestStats";
import MyRequestFilters from "../components/MyRequestFilters";
import MyRequestTable from "../components/MyRequestTable";
import RequestDetails from "../components/RequestDetails";

function MyRequestsPage() {
  const {
    requests,
    loading,
    error,

    search,
    setSearch,

    status,
    setStatus,

    selectedRequest,
    viewLoading,
    handleViewRequest,
  } = useMyRequests();

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
      <Box>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          My Requests
        </Typography>

        <Typography color="text.secondary">
          View and track all your purchase requests.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <MyRequestStats
        requests={requests}
      />

      <MyRequestFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <MyRequestTable
        requests={requests}
        onView={handleViewRequest}
      />

      <RequestDetails
        request={selectedRequest}
        loading={viewLoading}
      />
    </Stack>
  );
}

export default MyRequestsPage;