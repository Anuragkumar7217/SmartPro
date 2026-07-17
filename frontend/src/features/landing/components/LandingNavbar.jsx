import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, Stack, Box, IconButton } from "@mui/material";
import { PackageCheck, Sun, Moon } from "lucide-react";
import { useThemeStore } from "../../../store/themeStore";

function LandingNavbar() {
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: { xs: 16, md: 24 },
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "calc(100% - 32px)", md: "calc(100% - 64px)" },
        maxWidth: "1000px",
        background: mode === "dark" ? "rgba(30, 41, 59, 0.85)" : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        borderRadius: "50px",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: 1,
        zIndex: 1100,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        px: { xs: 2.5, sm: 3.5 },
      }}
    >
      {/* Box 1: Logo SmartPro */}
      <Stack
        direction="row"
        spacing={1.2}
        alignItems="center"
        component={RouterLink}
        to="/"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        sx={{
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
          height: 38,
          flexWrap: "nowrap", // Strictly prevent wrapping
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 2,
            background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            flexShrink: 0, // Prevent icon from squeezing
          }}
        >
          <PackageCheck size={18} />
        </Box>
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{
            background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.25rem",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap", // Keep logo on a single line
            flexShrink: 0,
          }}
        >
          SmartPro
        </Typography>
      </Stack>

      {/* Box 2: Problem, How It Works (Desktop only: lg and above) */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          height: 38,
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Typography
          onClick={() => scrollToSection("problem")}
          sx={{
            color: "text.secondary",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            height: "100%",
            transition: "color 0.2s ease",
            "&:hover": { color: "primary.main" },
          }}
        >
          Problem
        </Typography>
        <Typography
          onClick={() => scrollToSection("how-it-works")}
          sx={{
            color: "text.secondary",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            height: "100%",
            transition: "color 0.2s ease",
            "&:hover": { color: "primary.main" },
          }}
        >
          How It Works
        </Typography>
      </Stack>

      {/* Box 3: Theme Toggle, Sign In, Get Started */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ height: 38 }}>
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: "text.secondary",
            width: 38,
            height: 38,
            "&:hover": {
              color: "primary.main",
              bgcolor: "rgba(79,70,229,0.06)",
            },
          }}
        >
          {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </IconButton>

        <Button
          component={RouterLink}
          to="/login"
          variant="text"
          sx={{
            color: "text.primary",
            fontWeight: 600,
            fontSize: "0.875rem",
            textTransform: "none",
            height: 38,
            px: 2,
            borderRadius: "100px",
            "&:hover": { bgcolor: "rgba(79,70,229,0.06)" },
          }}
        >
          Sign In
        </Button>

        <Button
          component={RouterLink}
          to="/register"
          variant="contained"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            borderRadius: "100px",
            fontWeight: 700,
            fontSize: "0.875rem",
            px: 3,
            height: 38,
            textTransform: "none",
          }}
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}

export default LandingNavbar;
