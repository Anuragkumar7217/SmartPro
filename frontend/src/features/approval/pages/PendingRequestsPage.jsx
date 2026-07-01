import { useMemo, useState } from "react";
import {
  Box,
  Paper,
  TextField,
} from "@mui/material";

import AppSnackbar from "../../../components/common/AppSnackbar";
import Loader from "../../../components/common/Loader";

import ApprovalDrawer from "../components/ApprovalDrawer";
import PendingRequestsTable from "../components/PendingRequestsTable";
import usePendingRequests from "../hooks/usePendingRequests";

function PendingRequestsPage() {
  const {
    requests,
    loading,
    actionLoading,

    selectedRequest,
    drawerOpen,

    snackbar,

    openApprovalDrawer,
    closeApprovalDrawer,

    approveRequest,
    rejectRequest,

    closeSnackbar,
  } = usePendingRequests();

  const [search, setSearch] = useState("");

  const filteredRequests = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return requests.filter((request) => {
      const requestedBy =
        `${request.createdBy.firstName} ${request.createdBy.lastName}`.toLowerCase();

      return (
        request.prNumber.toLowerCase().includes(keyword) ||
        request.title.toLowerCase().includes(keyword) ||
        requestedBy.includes(keyword)
      );
    });
  }, [requests, search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 5,
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            size="small"
            placeholder="Search by PR Number, Title or Employee"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            sx={{
              width: {
                xs: "100%",
                md: 350,
              },
            }}
          />
        </Paper>

        <PendingRequestsTable
          requests={filteredRequests}
          onReview={openApprovalDrawer}
        />
      </Box>

      <ApprovalDrawer
        open={drawerOpen}
        request={selectedRequest}
        loading={actionLoading}
        onClose={closeApprovalDrawer}
        onApprove={approveRequest}
        onReject={rejectRequest}
      />

      <AppSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={closeSnackbar}
      />
    </>
  );
}

export default PendingRequestsPage;