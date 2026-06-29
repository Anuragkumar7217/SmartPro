import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import {
  Building2,
  ClipboardList,
  FileText,
  ShoppingCart,
} from "lucide-react";

import AppLayout from "../../components/layout/AppLayout";
import StatCard from "../../components/dashboard/StatCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import PendingApprovals from "../../components/dashboard/PendingApprovals";
import QuickActions from "../../components/dashboard/QuickActions";
import { useAuthStore } from "../../store/authStore";

function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const activities = [
    {
      id: 1,
      title: "Purchase Request PR-001 created",
      time: "5 minutes ago",
    },
    {
      id: 2,
      title: "Vendor ABC Pvt Ltd added",
      time: "20 minutes ago",
    },
    {
      id: 3,
      title: "RFQ-014 sent to vendors",
      time: "1 hour ago",
    },
  ];

  const approvals = [
    {
      id: 1,
      title: "Purchase Request PR-021",
      requestedBy: "Aman Joshi",
      status: "Pending",
    },
    {
      id: 2,
      title: "Purchase Order PO-010",
      requestedBy: "Rahul Sharma",
      status: "Pending",
    },
  ];

  const actions = [
    {
      id: 1,
      label: "New PR",
      onClick: () => console.log("New PR"),
    },
    {
      id: 2,
      label: "Add Vendor",
      onClick: () => console.log("Vendor"),
    },
    {
      id: 3,
      label: "Create RFQ",
      onClick: () => console.log("RFQ"),
    },
    {
      id: 4,
      label: "Create PO",
      onClick: () => console.log("PO"),
    },
  ];

  return (
    <AppLayout>
      {/* Header */}

      <Box mb={5}>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Welcome back,
          {" "}
          {user?.firstName || "User"} 👋
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          Here's an overview of your procurement system.
        </Typography>
      </Box>

      {/* Statistics */}

      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <StatCard
            title="Purchase Requests"
            value="18"
            icon={FileText}
            color="#2563EB"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <StatCard
            title="Vendors"
            value="42"
            icon={Building2}
            color="#10B981"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <StatCard
            title="RFQs"
            value="09"
            icon={ClipboardList}
            color="#F59E0B"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <StatCard
            title="Purchase Orders"
            value="15"
            icon={ShoppingCart}
            color="#7C3AED"
          />
        </Grid>
      </Grid>

      <Box mt={5}>
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            lg: 7,
          }}
        >
          <RecentActivity
            activities={activities}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 5,
          }}
        >
          <PendingApprovals
            approvals={approvals}
          />
        </Grid>
      </Grid>
    </Box>

    <Box mt={5}>
      <QuickActions actions={actions} />
    </Box>
    </AppLayout>
  );
}

export default DashboardPage;