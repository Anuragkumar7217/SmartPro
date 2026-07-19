import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import GoogleSignInButton from "./GoogleSignInButton";

import {
  Alert,
  Box,
  Paper,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import TextInput from "./forms/TextInput";
import PasswordInput from "./forms/PasswordInput";
import SubmitButton from "./forms/SubmitButton";
import { PackageCheck } from "lucide-react";

import { useAuthStore } from "../../../store/authStore";

function LoginForm() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showExpiredAlert, setShowExpiredAlert] = useState(
    searchParams.get("sessionExpired") === "true"
  );

  useEffect(() => {
    if (searchParams.get("sessionExpired") === "true") {
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const {
    login,
    loading,
    error,
    clearError,
  } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    clearError();
    setShowExpiredAlert(false);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 440,
        p: {
          xs: 4,
          md: 5,
        },
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,.82)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.7)",
        boxShadow:
          "0 20px 50px rgba(0,0,0,.08)",
      }}
    >
      <Stack
        component="form"
        spacing={2}
        onSubmit={handleSubmit}
      >
        {/* Heading */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 3,
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <PackageCheck size={28} />
          </Box>

          <Box align="center">
            <Typography
              variant="h5"
              fontWeight={700}
            >
              Welcome Back 👋
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Sign in to continue to SmartPro.
            </Typography>
          </Box>
        </Box>

        {/* Inputs */}

        <TextInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Remember Me */}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
        </Box>

        {/* Session Expired Alert */}

        {showExpiredAlert && (
          <Alert
            severity="warning"
            onClose={() => setShowExpiredAlert(false)}
          >
            Session time expired. Please log in again.
          </Alert>
        )}

        {/* Error */}

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {/* Login Button */}

        <SubmitButton
          type="submit"
          loading={loading}
          loadingText="Signing In..."
        >
          Sign In
        </SubmitButton>

        <GoogleSignInButton
          text="Don't have an account?"
          linkText="Create an account"
          to="/register"
        />
      </Stack>
    </Paper>
  );
}

export default LoginForm;