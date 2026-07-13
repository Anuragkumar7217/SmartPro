import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";

import {
  Alert,
  Box,
  Paper,
  Stack,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import TextInput from "./forms/TextInput";
import PasswordInput from "./forms/PasswordInput";
import SubmitButton from "./forms/SubmitButton";

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
  googleLogin,
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

  const handleGoogleSuccess = async (credentialResponse) => {
  try {
    await googleLogin(
      credentialResponse.credential
    );

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
  }
};

  const handleGoogleError = () => {
    console.log("Google Login Failed");
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

        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Welcome Back 👋
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Sign in to continue to SmartPro.
          </Typography>
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

        <Stack spacing={2}>
  <Divider>
    <Typography
      variant="body2"
      color="text.secondary"
    >
      OR
    </Typography>
  </Divider>

  <GoogleLogin
    onSuccess={handleGoogleSuccess}
    onError={handleGoogleError}
    useOneTap={false}
  />
</Stack>

        {/* <Divider /> */}

        {/* Register */}

        <Stack alignItems="center">
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Don't have an account?
          </Typography>

          <Link
            to="/register"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            <SubmitButton
              variant="outlined"
            >
              Create Account
            </SubmitButton>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default LoginForm;