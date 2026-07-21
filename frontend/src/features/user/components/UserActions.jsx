import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

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
        <CardContent>
          {/* Header */}
          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Account Status
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Current Status & Action Layout */}
          <Stack spacing={1.5} sx={{ mb: expanded ? 1 : 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center" }}
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

            {/* Toggle Action Link */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                alignSelf: "flex-start",
                "&:hover": {
                  color: isActive
                    ? "error.main"
                    : "success.main",
                },
              }}
              onClick={() =>
                setExpanded((prev) => !prev)
              }
            >
              {isActive
                ? "Want to deactivate this account?"
                : "Want to activate this account?"}
            </Typography>
          </Stack>

          {/* Action Button */}
          <Collapse in={expanded}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 0,
              }}
            >
              <Button
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
              >
                {isActive
                  ? "Deactivate Account"
                  : "Activate Account"}
              </Button>
            </Box>
          </Collapse>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
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