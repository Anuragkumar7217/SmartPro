import {
  Box,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";

import {
  FileText,
  CheckCircle2,
  ClipboardList,
  Send,
} from "lucide-react";

import WelcomeCard from "../../../components/common/WelcomeCard";
import StatsCards from "../../../components/common/StatsCards";

import PTQuickActions from "../purchaseTeam/PTQuickActions";
import ProcurementSummaryCard from "../purchaseTeam/ProcurementSummaryCard";

import RFQTable from "../../rfq/components/RFQTable";
import PurchaseOrderTable from "../../purchase-order/components/PurchaseOrderTable";

import usePurchaseTeamDashboard from "../hooks/usePurchaseTeamDashboard";

function PurchaseTeamDashboard() {
  const { loading, stats, summary, recentRFQs, recentPurchaseOrders } =
    usePurchaseTeamDashboard();

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
      title: "Total RFQs",
      value: stats.totalRFQs,
      icon: FileText,
      color: "primary",
    },
    {
      title: "Closed RFQs",
      value: stats.closedRFQs,
      icon: CheckCircle2,
      color: "success",
    },
    {
      title: "Draft Purchase Orders",
      value: stats.draftPurchaseOrders,
      icon: ClipboardList,
      color: "warning",
    },
    {
      title: "Issued Purchase Orders",
      value: stats.issuedPurchaseOrders,
      icon: Send,
      color: "info",
    },
  ];

  return (
    <Stack spacing={3}>
      <WelcomeCard />

      <StatsCards cards={statCards} />

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
            lg: 4,
          }}
        >
          <PTQuickActions />
        </Grid>
      </Grid>

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
          <PurchaseOrderTable
  purchaseOrders={recentPurchaseOrders}
  title="Recent Purchase Orders"
  disableRowClick
  disablePagination
/>
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <ProcurementSummaryCard
            rfqs={summary.rfqs}
            purchaseOrders={summary.purchaseOrders}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default PurchaseTeamDashboard;