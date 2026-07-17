import { Dialog, DialogContent, IconButton, Box, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import getCustomTheme from "../../../theme/theme";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({ mode }) {
  const navigate = useNavigate();
  const lightTheme = getCustomTheme("light");

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "visible",
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "text.secondary",
            zIndex: 10,
            bgcolor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(4px)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.95)",
              color: "text.primary",
            },
          }}
        >
          <X size={20} />
        </IconButton>

        <DialogContent sx={{ p: 0 }}>
          <ThemeProvider theme={lightTheme}>
            {mode === "login" ? <LoginForm /> : <RegisterForm />}
          </ThemeProvider>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default AuthModal;
