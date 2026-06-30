import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import TextInput from "./forms/TextInput";
import PasswordInput from "./forms/PasswordInput";
import SubmitButton from "./forms/SubmitButton";

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
            Create Account 🚀
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Register to start using SmartPro.
          </Typography>
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

        <Divider />

        {/* Login */}

        <Stack alignItems="center">
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Already have an account?
          </Typography>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            <SubmitButton variant="outlined">
              Sign In
            </SubmitButton>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default RegisterForm;