import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";


import { PackageCheck,} from "lucide-react";

import TextInput from "./forms/TextInput";
import PasswordInput from "./forms/PasswordInput";
import SubmitButton from "./forms/SubmitButton";
import GoogleSignInButton from "./GoogleSignInButton";

import { authService } from "../services/authService";

function RegisterForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setError("");

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await authService.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
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
              boxShadow:
                "0 12px 30px rgba(79,70,229,.25)",
            }}
          >
            <PackageCheck size={28} />
          </Box>

        <Box align="center">
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Create Account 🚀
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Register to start using SmartPro.
          </Typography>
        </Box>
        </Box>

        {/* Inputs */}

        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

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

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Error */}

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {/* Register Button */}

        <SubmitButton
          type="submit"
          loading={loading}
          loadingText="Creating Account..."
        >
          Create Account
        </SubmitButton>

        <GoogleSignInButton
          text="Already have an account?"
          linkText="Sign In"
          to="/login"
        />

      </Stack>
    </Paper>
  );
}

export default RegisterForm;