import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
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
      <Paper
        elevation={0}
        sx={{
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        <Stack
          spacing={2}
          sx={{ p: 3 }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
          >
            Account Status
          </Typography>

          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Current Status
            </Typography>

            <StatusChip
              status={
                isActive
                  ? "ACTIVE"
                  : "INACTIVE"
              }
            />
          </Stack>
        </Stack>

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
                  borderRadius: 3,
                }}
              >
                {isActive
                  ? "Deactivate User"
                  : "Activate User"}
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Paper>

      <ConfirmationDialog
        open={dialogOpen}
        title={
          isActive
            ? "Deactivate User"
            : "Activate User"
        }
        message={
          isActive
            ? `Are you sure you want to deactivate ${user.firstName} ${user.lastName}'s account? They will not be able to log in until activated again.`
            : `Are you sure you want to activate ${user.firstName} ${user.lastName}'s account? They will be able to access the system again.`
        }
        confirmText={
          isActive
            ? "Deactivate"
            : "Activate"
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