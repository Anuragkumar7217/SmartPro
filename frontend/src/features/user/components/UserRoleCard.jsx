import {
  useEffect,
  useState,
} from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

import { ROLES } from "../../../utils/roles";

function UserRoleCard({
  user,
  loading = false,
  onRoleChange,
}) {
  const [selectedRole, setSelectedRole] =
    useState(user.role);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  useEffect(() => {
    setSelectedRole(user.role);
  }, [user]);

  const hasChanges =
    selectedRole !== user.role;

  const handleConfirm = () => {
    onRoleChange(selectedRole);
    setDialogOpen(false);
  };

  return (
    <>
      <Card elevation={0}>
        <CardContent>
          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Change Role
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Current Role
          </Typography>

          <Box mt={0.5} mb={3}>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              label={user.role.replaceAll(
                "_",
                " "
              )}
            />
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Select New Role
          </Typography>

          <FormControl
            fullWidth
            sx={{ mt: 1 }}
          >
            <RadioGroup
              value={selectedRole}
              onChange={(event) =>
                setSelectedRole(
                  event.target.value
                )
              }
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, 1fr)",
                  gap: 1,
                }}
              >
                <FormControlLabel
                  value={ROLES.ADMIN}
                  control={<Radio />}
                  label="Admin"
                />

                <FormControlLabel
                  value={ROLES.EMPLOYEE}
                  control={<Radio />}
                  label="Employee"
                />

                <FormControlLabel
                  value={ROLES.MANAGER}
                  control={<Radio />}
                  label="Manager"
                />

                <FormControlLabel
                  value={
                    ROLES.PURCHASE_TEAM
                  }
                  control={<Radio />}
                  label="Purchase Team"
                />
              </Box>
            </RadioGroup>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              height: 46,
            }}
            disabled={
              loading || !hasChanges
            }
            onClick={() =>
              setDialogOpen(true)
            }
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <ConfirmationDialog
        open={dialogOpen}
        title="Change User Role"
        confirmColor="primary"
        loading={loading}
        onClose={() =>
          setDialogOpen(false)
        }
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default UserRoleCard;