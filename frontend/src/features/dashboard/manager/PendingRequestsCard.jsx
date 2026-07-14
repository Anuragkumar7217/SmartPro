import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Clock3, ArrowRightCircle } from "lucide-react";

function PendingRequestsCard({
  totalPending,
}) {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        background: (theme) => theme.palette.background.cardGradient,
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      <Stack
        spacing={3}
        height="100%"
      >
        {/* Center aligned section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(79,70,229,0.15)"
                  : "#EEF2FF",
              color: "primary.main",
            }}
          >
            <Clock3 size={34} />
          </Box>

          <Typography
            variant="h5"
            fontWeight={700}
            mt={3}
          >
            Pending Requests
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: 56,
              lineHeight: 1,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            {totalPending}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
            }}
          >
            Requests waiting for your
            <br />
            review and action.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            mb={1}
          >
            What's next?
          </Typography>

          <Typography color="text.secondary">
            Review each request, add your
            comments and approve or reject.
          </Typography>
        </Box>

        <Box sx={{ mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={
              <ArrowRightCircle size={18} />
            }
            onClick={() =>
              navigate(
                "/purchase-requests/pending"
              )
            }
            sx={{
              py: 1.4,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Go to Pending Requests
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default PendingRequestsCard;