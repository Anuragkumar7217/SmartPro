import {
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function RequestSummaryChart({
  stats,
}) {
  const total =
    stats.submitted +
    stats.approved +
    stats.rejected;

  const submitted =
    total === 0
      ? 0
      : (stats.submitted / total) * 100;

  const approved =
    total === 0
      ? 0
      : (stats.approved / total) * 100;

  const rejected =
    total === 0
      ? 0
      : (stats.rejected / total) * 100;

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
        mb={3}
      >
        Request Summary
      </Typography>

      <Stack
        spacing={3}
        alignItems="center"
      >
        <Box
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: `conic-gradient(
              #F59E0B 0% ${submitted}%,
              #22C55E ${submitted}% ${
              submitted + approved
            }%,
              #EF4444 ${
                submitted + approved
              }% 100%
            )`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 110,
              height: 110,
              bgcolor: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #E5E7EB",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={24}
            >
              {total}
            </Typography>
          </Box>
        </Box>

        <Stack
          spacing={1}
          width="100%"
        >
          <Legend
            color="#F59E0B"
            label="Submitted"
            value={stats.submitted}
          />

          <Legend
            color="#22C55E"
            label="Approved"
            value={stats.approved}
          />

          <Legend
            color="#EF4444"
            label="Rejected"
            value={stats.rejected}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

function Legend({
  color,
  label,
  value,
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            bgcolor: color,
          }}
        />

        <Typography>{label}</Typography>
      </Stack>

      <Typography fontWeight={700}>
        {value}
      </Typography>
    </Stack>
  );
}

export default RequestSummaryChart;