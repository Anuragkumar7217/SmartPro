import { useNavigate } from "react-router-dom";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  FilePlus2,
  ClipboardList,
} from "lucide-react";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
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
        sx={{ mb: 1 }}
      >
        Quick Actions
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FilePlus2 size={18} />}
          onClick={() =>
            navigate("/purchase-requests/create")
          }
          sx={{
            height: 50,
            borderRadius: 3,
            color: "#625BEC",
            borderColor: "#625BEC",
            "&:hover": {
              color: "#ffffff",
              borderColor: "#4338CA",
              backgroundColor: "#625BEC",
            },
          }}
        >
          Create Request
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<ClipboardList size={18} />}
          onClick={() =>
            navigate("/purchase-requests/my")
          }
          sx={{
            height: 50,
            borderRadius: 3,
            color: "#625BEC",
            borderColor: "#625BEC",
            "&:hover": {
              color: "#ffffff",
              borderColor: "#4338CA",
              backgroundColor: "#625BEC",
            },
          }}
        >
          My Requests
        </Button>
      </Stack>
    </Paper>
  );
}

export default QuickActions;