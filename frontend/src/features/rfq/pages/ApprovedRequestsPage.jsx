import { useMemo, useState } from "react";

import { Box } from "@mui/material";

import AppSnackbar from "../../../components/common/AppSnackbar";
import Loader from "../../../components/common/Loader";

import ApprovedPRDrawer from "../components/ApprovedPRDrawer";
import ApprovedPRTable from "../components/ApprovedPRTable";
import CreateRFQDrawer from "../components/CreateRFQDrawer";
import RFQFilters from "../components/RFQFilters";

import useApprovedPurchaseRequests from "../hooks/useApprovedPurchaseRequests";

function ApprovedRequestsPage() {
  const {
    requests,
    vendors,

    loading,
    actionLoading,

    selectedRequest,

    drawerOpen,
    createDrawerOpen,

    snackbar,

    openRequestDrawer,
    closeRequestDrawer,

    openCreateDrawer,
    closeCreateDrawer,

    createRFQ,

    closeSnackbar,
  } = useApprovedPurchaseRequests();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredRequests = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    const filtered = requests.filter((request) => {
      const requestedBy =
        `${request.createdBy.firstName} ${request.createdBy.lastName}`.toLowerCase();

      return (
        request.prNumber.toLowerCase().includes(keyword) ||
        request.title.toLowerCase().includes(keyword) ||
        requestedBy.includes(keyword)
      );
    });

    filtered.sort((a, b) => {
      if (sortBy === "latest") {
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
      }

      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );
    });

    return filtered;
  }, [requests, search, sortBy]);

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
        {/* <ApprovedPRStats requests={requests} /> */}

        <RFQFilters
          search={search}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ApprovedPRTable
          requests={filteredRequests}
          onView={openRequestDrawer}
        />
      </Box>

      <ApprovedPRDrawer
        open={drawerOpen}
        request={selectedRequest}
        onClose={closeRequestDrawer}
        onCreateRFQ={openCreateDrawer}
      />

      <CreateRFQDrawer
        open={createDrawerOpen}
        request={selectedRequest}
        vendors={vendors}
        loading={actionLoading}
        onClose={closeCreateDrawer}
        onSubmit={createRFQ}
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

export default ApprovedRequestsPage;