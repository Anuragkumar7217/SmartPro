import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  FilePlus2,
  ClipboardPlus,
  Sparkles,
} from "lucide-react";

function PTQuickActions() {
  const navigate = useNavigate();

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
      {/* Header */}

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ mb: 1.5 }}
      >
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: 3,
            bgcolor: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#625BEC",
            flexShrink: 0,
          }}
        >
          <Sparkles size={22} />
        </Box>

        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          Quick Actions
        </Typography>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 5,
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        Quickly create procurement documents without
        navigating through multiple pages.
      </Typography>

      {/* Actions */}

      <Stack spacing={2.5}>
        <Box>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <FilePlus2 size={18} />
            }
            onClick={() =>
              navigate("/approved-requests")
            }
            sx={{
              height: 56,
              borderRadius: 3,
              color: "#625BEC",
              borderColor: "#625BEC",
              justifyContent: "flex-start",
              textTransform: "none",
              fontWeight: 600,
              transition: ".25s",

              "&:hover": {
                color: "#FFFFFF",
                borderColor: "#625BEC",
                bgcolor: "#625BEC",
                transform: "translateY(-2px)",
              },
            }}
          >
            Create RFQ
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              mt: 0.75,
              px: 1,
              lineHeight: 1.5,
            }}
          >
            Generate a new Request for Quotation from approved purchase
            requests.
          </Typography>
        </Box>

        <Box>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <ClipboardPlus size={18} />
            }
            onClick={() =>
              navigate("/purchase-orders")
            }
            sx={{
              height: 56,
              borderRadius: 3,
              color: "#625BEC",
              borderColor: "#625BEC",
              justifyContent: "flex-start",
              textTransform: "none",
              fontWeight: 600,
              transition: ".25s",

              "&:hover": {
                color: "#FFFFFF",
                borderColor: "#625BEC",
                bgcolor: "#625BEC",
                transform: "translateY(-2px)",
              },
            }}
          >
            Create Purchase Order
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              mt: 0.75,
              px: 1,
              lineHeight: 1.5,
            }}
          >
            Create purchase orders using finalized vendor quotations.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default PTQuickActions;