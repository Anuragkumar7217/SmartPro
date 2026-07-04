import {
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function StatsCards({
  stats = [],
}) {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mb: 3 }}
    >
      {stats.map((stat) => (
        <Grid
          key={stat.title}
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
                  bgcolor: `${stat.color}15`,
                  color: stat.color,
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </Stack>

              <Stack
                spacing={0.5}
                sx={{ flex: 1 }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {stat.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {stat.value}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsCards;