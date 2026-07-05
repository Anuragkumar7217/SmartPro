import {
  Box,
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
          sx={{ minWidth: 90 }}
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

function RequestSummaryChart({
  stats,
}) {
  const chartData = [
    {
      value: stats.submitted,
      color: "#F59E0B",
    },
    {
      value: stats.approved,
      color: "#22C55E",
    },
    {
      value: stats.rejected,
      color: "#EF4444",
    },
  ];

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
        mb={3}
      >
        Request Summary
      </Typography>

      <Grid
        container
        alignItems="center"
      >
        <Grid size={7}>
          <Stack spacing={1.5}>
            <SummaryRow
              label="Submitted"
              value={stats.submitted}
              color="#F59E0B"
            />

            <SummaryRow
              label="Approved"
              value={stats.approved}
              color="#22C55E"
            />

            <SummaryRow
              label="Rejected"
              value={stats.rejected}
              color="#EF4444"
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
    </Paper>
  );
}

export default RequestSummaryChart;