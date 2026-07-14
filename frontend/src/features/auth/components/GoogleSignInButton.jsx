import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, Link } from "react-router-dom";

import {
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { useAuthStore } from "../../../store/authStore";

function GoogleSignInButton({
  text,
  linkText,
  to,
}) {
  const navigate = useNavigate();

  const { googleLogin } = useAuthStore();

  const handleGoogleSuccess = async (
    credentialResponse
  ) => {
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
        size="large"
      />

      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
      >
        {text}{" "}
        <Typography
          component={Link}
          to={to}
          sx={{
            display: {
              xs: "block",
              sm: "inline",
            },
            textDecoration: "none",
            fontWeight: 600,
            color: "primary.main",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {linkText}
        </Typography>
      </Typography>
    </Stack>
  );
}

export default GoogleSignInButton;