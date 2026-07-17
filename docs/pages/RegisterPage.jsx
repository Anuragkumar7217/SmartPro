import { Box } from "@mui/material";

import LoginLeftPanel from "../components/LoginLeftPanel";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "60% 40%",
        },
        background:
          "linear-gradient(135deg,#F8FAFC 0%,#EEF2FF 50%,#F5F3FF 100%)",
      }}
    >
      <LoginLeftPanel />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: {
            xs: 3,
            sm: 4,
            md: 6,
          },
          py: {
            xs: 4,
            lg: 1,
          },
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
}

export default RegisterPage;