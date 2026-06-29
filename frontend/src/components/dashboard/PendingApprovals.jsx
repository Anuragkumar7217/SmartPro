import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function PendingApprovals({ approvals = [] }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15,23,42,.05)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Pending Approvals
      </Typography>

      <Stack spacing={2}>
        {approvals.map((approval) => (
          <Box
            key={approval.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              bgcolor: "#F8FAFC",
            }}
          >
            <Box>
              <Typography fontWeight={600}>
                {approval.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {approval.requestedBy}
              </Typography>
            </Box>

            <Chip
              label={approval.status}
              color="warning"
              size="small"
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export default PendingApprovals;