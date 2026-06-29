import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function QuickActions({ actions = [] }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15,23,42,.05)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Quick Actions
      </Typography>

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="contained"
            size="large"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
}

export default QuickActions;