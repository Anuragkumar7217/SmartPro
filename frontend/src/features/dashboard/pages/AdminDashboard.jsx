import {
  Box,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";

import {
  Users,
  UserCheck,
  FileText,
  ClipboardList,
} from "lucide-react";

import WelcomeCard from "../../../components/common/WelcomeCard";
import StatsCards from "../../../components/common/StatsCards";

import RFQTable from "../../rfq/components/RFQTable";
import PurchaseOrderTable from "../../purchase-order/components/PurchaseOrderTable";

import ProcurementSummaryCard from "../purchaseTeam/ProcurementSummaryCard";

import AdminQuickActions from "../admin/AdminQuickActions";
import AdminPendingActions from "../admin/AdminPendingActions";

import useAdminDashboard from "../hooks/useAdminDashboard";

function AdminDashboard() {
  const {
    loading,
    stats,
    summary,
    pendingActions,
    recentRFQs,
    recentPurchaseOrders,
  } = useAdminDashboard();

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

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <Users size={26} />,
      color: "#4F46E5",
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      icon: <UserCheck size={26} />,
      color: "#16A34A",
    },
    {
      title: "Total RFQs",
      value: stats.totalRFQs,
      icon: <FileText size={26} />,
      color: "#0288D1",
    },
    {
      title: "Purchase Orders",
      value: stats.totalPurchaseOrders,
      icon: <ClipboardList size={26} />,
      color: "#ED6C02",
    },
  ];

  return (
    <Stack spacing={3}>
      <WelcomeCard />

      <StatsCards stats={statCards} />

      {/* Pending Actions + Procurement Summary */}

      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            lg: 7,
          }}
        >
          <AdminPendingActions
            pendingActions={pendingActions}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 5,
          }}
        >
          <ProcurementSummaryCard
            rfqs={summary.rfqs}
            purchaseOrders={
              summary.purchaseOrders
            }
          />
        </Grid>
      </Grid>

      {/* Quick Actions */}

      <AdminQuickActions />

      {/* Recent Tables */}

      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
        >
          <RFQTable
            rfqs={recentRFQs}
            title="Recent RFQs"
            disableRowClick
            disablePagination
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 6,
          }}
        >
          <PurchaseOrderTable
            purchaseOrders={
              recentPurchaseOrders
            }
            title="Recent Purchase Orders"
            disableRowClick
            disablePagination
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default AdminDashboard;