import {
  ShieldCheck,
  ShoppingCart,
  UserCheck,
  Users,
} from "lucide-react";

import {
  Box,
  Grid,
} from "@mui/material";

import StatsCards from "../../../components/common/StatsCards";
import AppSnackbar from "../../../components/common/AppSnackbar";
import Loader from "../../../components/common/Loader";

import UserFilters from "../components/UserFilters";
import UserTable from "../components/UserTable";
import UserDetailPanel from "../components/UserDetailPanel";

import useUsers from "../hooks/useUsers";

function UserManagementPage() {
  const {
    loading,
    actionLoading,

    users,
    selectedUser,
    setSelectedUser,

    search,
    setSearch,

    role,
    setRole,

    status,
    setStatus,

    stats,

    updateRole,
    activateUser,
    deactivateUser,

    snackbar,
    closeSnackbar,
  } = useUsers();

  if (loading) {
    return <Loader />;
  }

  const userStats = [
    {
      title: "Admins",
      value: stats.admins,
      color: "#6366F1",
      icon: (
        <ShieldCheck size={26} />
      ),
    },
    {
      title: "Employees",
      value: stats.employees,
      color: "#10B981",
      icon: <Users size={26} />,
    },
    {
      title: "Managers",
      value: stats.managers,
      color: "#F59E0B",
      icon: (
        <UserCheck size={26} />
      ),
    },
    {
      title: "Purchase Team",
      value: stats.purchaseTeam,
      color: "#EC4899",
      icon: (
        <ShoppingCart size={26} />
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatsCards
          stats={userStats}
        />

        <UserFilters
          search={search}
          onSearchChange={setSearch}
          role={role}
          onRoleChange={setRole}
          status={status}
          onStatusChange={setStatus}
        />

        <Grid
          container
          spacing={3}
          sx={{ mt: 3 }}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <UserTable
              users={users}
              selectedUser={
                selectedUser
              }
              onSelect={
                setSelectedUser
              }
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <UserDetailPanel
              user={selectedUser}
              loading={
                actionLoading
              }
              onRoleChange={
                updateRole
              }
              onActivate={
                activateUser
              }
              onDeactivate={
                deactivateUser
              }
            />
          </Grid>
        </Grid>
      </Box>

      <AppSnackbar
        open={snackbar.open}
        severity={
          snackbar.severity
        }
        message={
          snackbar.message
        }
        onClose={closeSnackbar}
      />
    </>
  );
}

export default UserManagementPage;