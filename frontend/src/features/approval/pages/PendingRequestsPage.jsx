import { useMemo, useState } from "react";
import {
  Box,
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
        <Box
  sx={{
    display: "flex",
    gap: 2,
    flexWrap: "wrap",
  }}
>
      <TextField
        fullWidth
        size="small"
        placeholder="Search by PR Number, Title or Employee"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        sx={{
          flex: 1,
          minWidth: 300,
          "& .MuiOutlinedInput-root": {
            bgcolor: "#ffffff",

            "& fieldset": {
              borderColor: "#E5E7EB",
            },

            "&:hover fieldset": {
              borderColor: "#E5E7EB",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F46E5",
            },
          },
        }}
      />
    </Box>

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