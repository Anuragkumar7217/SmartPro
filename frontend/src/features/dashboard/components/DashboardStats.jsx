import { Grid, Paper, Typography } from "@mui/material";

import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const cards = [
  {
    key: "total",
    title: "Total Requests",
    icon: FileText,
    color: "#4F46E5",
  },
  {
    key: "submitted",
    title: "Submitted",
    icon: Clock3,
    color: "#F59E0B",
  },
  {
    key: "approved",
    title: "Approved",
    icon: CheckCircle2,
    color: "#22C55E",
  },
  {
    key: "rejected",
    title: "Rejected",
    icon: XCircle,
    color: "#EF4444",
  },
];

function DashboardStats({ stats }) {
  return (
    <Grid
      container
      spacing={3}
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Grid
            key={card.key}
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
          >
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
              <Icon
                size={30}
                color={card.color}
              />

              <Typography
                sx={{
                  mt: 2,
                  color: "#6B7280",
                  fontSize: 14,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                {stats[card.key]}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DashboardStats;