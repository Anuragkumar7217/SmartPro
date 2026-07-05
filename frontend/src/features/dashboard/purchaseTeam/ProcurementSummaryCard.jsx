import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { PieChart } from "@mui/x-charts";

function SummaryRow({
  label,
  value,
  color,
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.2}
      >
        <Box
  sx={{
    width: 10,
    height: 10,
    borderRadius: "50%",
    bgcolor: color,
    flexShrink: 0,
    position: "relative",
    top: "10px", 
  }}
/>

        <Typography
          fontSize={16}
          fontWeight={500}
          sx={{
            minWidth: 70,
          }}
        >
          {label}
        </Typography>

        <Typography
          fontSize={16}
          fontWeight={700}
          sx={{
            width: 28,
            textAlign: "right",
          }}
        >
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}

function SummarySection({
  title,
  data,
}) {
  const chartData = [
    {
      value: data.draft,
      color: "#F59E0B",
    },
    {
      value: data.issued,
      color: "#3B82F6",
    },
    {
      value:
        data.closed ??
        data.cancelled,
      color:
        data.closed != null
          ? "#22C55E"
          : "#EF4444",
    },
  ];

  return (
    <Grid
      container
      alignItems="center"
    >
      <Grid
        size={7}
      >
        <Typography
          align="center"
          fontSize={20}
          fontWeight={700}
          mb={2}
        >
          {title}
        </Typography>

        <Stack spacing={1.5}>
          <SummaryRow
            label="Draft"
            value={data.draft}
            color="#F59E0B"
          />

          <SummaryRow
            label="Issued"
            value={data.issued}
            color="#3B82F6"
          />

          <SummaryRow
            label={
              data.closed != null
                ? "Closed"
                : "Cancelled"
            }
            value={
              data.closed ??
              data.cancelled
            }
            color={
              data.closed != null
                ? "#22C55E"
                : "#EF4444"
            }
          />
        </Stack>
      </Grid>

      <Grid
        size={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChart
  width={135}
  height={135}
  series={[
    {
      innerRadius: 34,
      outerRadius: 52,
      paddingAngle: 2,
      cornerRadius: 5,
      data: chartData,
    },
  ]}
  slotProps={{
    legend: {
      hidden: true,
    },
  }}
/>
      </Grid>
    </Grid>
  );
}

function ProcurementSummaryCard({
  rfqs,
  purchaseOrders,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        align="center"
         spacing={1.5}
        sx={{ mb: 1.5 }}
      >
        Procurement Summary
      </Typography>

      <SummarySection
        title="RFQs"
        data={rfqs}
      />

      <Divider sx={{ my: 3 }} />

      <SummarySection
        title="Purchase Orders"
        data={purchaseOrders}
      />
    </Paper>
  );
}

export default ProcurementSummaryCard;