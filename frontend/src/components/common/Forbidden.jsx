import { Box, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

function Forbidden() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        textAlign: "center",
        px: 3,
        py: 6,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          borderRadius: 6,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: (theme) => theme.shadows[2],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 480,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "error.lighter",
            color: "error.main",
            mb: 4,
            animation: "pulse 2s infinite ease-in-out",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(0.95)",
                boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.4)",
              },
              "70%": {
                transform: "scale(1)",
                boxShadow: "0 0 0 16px rgba(239, 68, 68, 0)",
              },
              "100%": {
                transform: "scale(0.95)",
                boxShadow: "0 0 0 0 rgba(239, 68, 68, 0)",
              },
            },
          }}
        >
          <ShieldAlert size={40} />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 56, md: 72 },
            fontWeight: 900,
            lineHeight: 1,
            color: "text.primary",
            letterSpacing: "-2px",
            mb: 1,
            background: "linear-gradient(45deg, #EF4444 30%, #F59E0B 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          403
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 1.5,
            letterSpacing: "-0.5px",
          }}
        >
          Access Denied
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 4,
            lineHeight: 1.6,
            fontSize: "1.05rem",
          }}
        >
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </Typography>

        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 3,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            background: "linear-gradient(135deg, #4F46E5, #6366F1)",
            boxShadow: "0 10px 20px rgba(79, 70, 229, 0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #4338CA, #4F46E5)",
              boxShadow: "0 10px 20px rgba(79, 70, 229, 0.35)",
            },
          }}
        >
          Go to Dashboard
        </Button>
      </Paper>
    </Box>
  );
}

export default Forbidden;
