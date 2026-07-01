import {
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const cards = [
  {
    title: "Total Requests",
    color: "#4F46E5",
    icon: FileText,
    key: "total",
  },
  {
    title: "Submitted",
    color: "#ed6c02",
    icon: Clock3,
    key: "submitted",
  },
  {
    title: "Approved",
    color: "#16A34A",
    icon: CheckCircle2,
    key: "approved",
  },
  {
    title: "Rejected",
    color: "#DC2626",
    icon: XCircle,
    key: "rejected",
  },
];

function MyRequestStats({
  requests,
}) {
  const stats = {
    total: requests.length,

    submitted: requests.filter(
      (request) =>
        request.status === "SUBMITTED"
    ).length,

    approved: requests.filter(
      (request) =>
        request.status === "APPROVED"
    ).length,

    rejected: requests.filter(
      (request) =>
        request.status === "REJECTED"
    ).length,
  };

  return (
    <Grid
      container
      spacing={3}
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
            key={card.key}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 5,
                border: "1px solid #E5E7EB",
                boxShadow:
                  "0 8px 30px rgba(15,23,42,.06)",
              }}
            >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Stack
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 3,
                  bgcolor: `${card.color}15`,
                  color: card.color,
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={26} />
              </Stack>

              <Stack
                spacing={0.5}
                sx={{ flex: 1 }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {stats[card.key]}
                </Typography>
              </Stack>
            </Stack>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MyRequestStats;