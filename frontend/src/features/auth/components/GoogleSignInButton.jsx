import { useState, useEffect, useRef } from "react";
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

  const containerRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(300);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        // Google button width has min 200 and max 400
        const clampedWidth = Math.min(Math.max(parentWidth, 200), 400);
        setButtonWidth(clampedWidth);
      }
    };

    updateWidth();
    // Add resize event listener to handle screen size changes
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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

      <div ref={containerRef} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          useOneTap={false}
          size="medium"
          width={buttonWidth}
        />
      </div>

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