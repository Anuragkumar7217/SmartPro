import { useEffect, useRef } from "react";

import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

import useMyRequests from "../hooks/useMyRequests";

import PRStats from "../components/PRStats";
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

  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedRequest && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedRequest]);

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
      <Box>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          View and track all your purchase requests.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <PRStats
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

      <Box ref={detailsRef}>
        <RequestDetails
          request={selectedRequest}
          loading={viewLoading}
        />
      </Box>
    </Stack>
  );
}

export default MyRequestsPage;