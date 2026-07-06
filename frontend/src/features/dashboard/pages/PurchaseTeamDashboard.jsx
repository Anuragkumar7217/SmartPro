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
    icon: <FileText size={26} />,
    color: "#4F46E5",
  },
  {
    title: "Closed RFQs",
    value: stats.closedRFQs,
    icon: <CheckCircle2 size={26} />,
    color: "#16A34A",
  },
  {
    title: "Draft POs",
    value: stats.draftPurchaseOrders,
    icon: <ClipboardList size={26} />,
    color: "#ED6C02",
  },
  {
    title: "Issued POs",
    value: stats.issuedPurchaseOrders,
    icon: <Send size={26} />,
    color: "#0288D1", // ya "#1976D2"
  },
];

  return (
    <Stack spacing={3}>
      <WelcomeCard />

      <StatsCards stats={statCards} />

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