import { useEffect } from "react";

import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { X } from "lucide-react";

import { useAuthStore } from "../../../store/authStore";
import useProfile from "../hooks/useProfile";

function ProfileDialog({ open, onClose }) {
  const user = useAuthStore((state) => state.user);

  const {
    profile,
    loading,
    error,
    fetchProfile,
  } = useProfile();

  useEffect(() => {
    if (open) {
      fetchProfile();
    }
  }, [open, fetchProfile]);

  const fullName = user
    ? `${user.firstName} ${user.lastName}`
    : "Guest User";

  const avatarLetter =
    user?.firstName?.charAt(0)?.toUpperCase() || "G";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 700,
          py: 2,
          px: 3,
        }}
      >
        My Profile

        <IconButton onClick={onClose}>
          <X size={20} />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent
        sx={{
          py: 2,
          px: 3,
        }}
      >
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            py={5}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">
            {error}
          </Alert>
        ) : (
          <>
            <Stack
              spacing={1}
              alignItems="center"
              mb={2.5}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: "#4F46E5",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {avatarLetter}
              </Avatar>

              <Typography
                variant="h5"
                fontWeight={700}
              >
                {fullName}
              </Typography>
            </Stack>

            <Stack spacing={1.5}>
              <InfoCard
                label="Email"
                value={profile?.email}
              />

              <InfoCard
                label="Role"
                value={profile?.role}
              />

              <InfoCard
                label="User ID"
                value={profile?.id}
              />
            </Stack>
          </>
        )}
      </DialogContent>

      <Divider />

      <DialogActions
        sx={{
          px: 3,
          py: 1.5,
        }}
      >
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            minWidth: 100,
            borderRadius: 2.5,
            textTransform: "none",
            background:
              "linear-gradient(135deg,#4F46E5,#6366F1)",
            boxShadow:
              "0 8px 20px rgba(79,70,229,.25)",
            "&:hover": {
              background:
                "linear-gradient(135deg,#4338CA,#4F46E5)",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function InfoCard({ label, value }) {
  return (
    <Box
      sx={{
        p: 1.5,
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        bgcolor: "#FAFAFA",
      }}
    >
      <Typography
        fontSize={13}
        color="text.secondary"
        mb={0.5}
      >
        {label}
      </Typography>

      <Typography
        fontWeight={600}
        sx={{
          wordBreak: "break-word",
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
}

export default ProfileDialog;