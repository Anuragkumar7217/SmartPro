import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { ChevronDown } from "lucide-react";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";
import StatusChip from "../../../components/common/StatusChip";

function UserActions({
  user,
  loading = false,
  onActivate,
  onDeactivate,
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const isActive = user.isActive;

  const handleConfirm = () => {
    if (isActive) {
      onDeactivate();
    } else {
      onActivate();
    }

    setDialogOpen(false);
  };

  return (
    <>
      <Card elevation={0}>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Account Status
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Current Status
          </Typography>

          <Box mt={0.5} mb={3}>
            <StatusChip
              status={
                isActive
                  ? "ACTIVE"
                  : "INACTIVE"
              }
            />
          </Box>
        </CardContent>

        <Accordion
          elevation={0}
          expanded={expanded}
          onChange={(_, value) =>
            setExpanded(value)
          }
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
            borderTop: "1px solid",
            borderColor: "divider",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ChevronDown size={18} />
            }
          >
            <Typography
              fontWeight={600}
              color={
                isActive
                  ? "error.main"
                  : "success.main"
              }
            >
              {isActive
                ? "Want to deactivate this account?"
                : "Want to activate this account?"}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack spacing={2}>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {isActive
                  ? "The user will no longer be able to log in until the account is activated again."
                  : "The user will be able to log in and access the system again."}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                color={
                  isActive
                    ? "error"
                    : "success"
                }
                disabled={loading}
                onClick={() =>
                  setDialogOpen(true)
                }
                sx={{
                  height: 46,
                }}
              >
                {isActive
                  ? "Deactivate User"
                  : "Activate User"}
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Card>

      <ConfirmationDialog
        open={dialogOpen}
        title={
          isActive
            ? "Deactivate User"
            : "Activate User"
        }
        confirmColor={
          isActive
            ? "error"
            : "success"
        }
        loading={loading}
        onClose={() =>
          setDialogOpen(false)
        }
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default UserActions;