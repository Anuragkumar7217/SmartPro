import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import {
  PackageCheck,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  ClipboardList,
} from "lucide-react";

import illustration from "../../../assets/procurement-illustration.png";

const features = [
  {
    icon: ShieldCheck,
    title: "Role Based Access",
    description: "Secure access with role-based permissions.",
  },
  {
    icon: Building2,
    title: "Vendor Management",
    description: "Manage vendors and monitor performance.",
  },
  {
    icon: FileSpreadsheet,
    title: "RFQ Workflow",
    description: "Create, compare and manage quotations.",
  },
  {
    icon: ClipboardList,
    title: "Purchase Orders",
    description: "Generate and track purchase orders.",
  },
];

function LoginLeftPanel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        pl: {
          xs: 3,
          sm: 5,
          lg: 10,
        },
        pr: {
          xs: 3,
          sm: 5,
          lg: 0,
        },
        py: {
          xs: 4,
          lg: 7,
        },
      }}
    >
      {/* Background Blur */}

      <Box
        sx={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#2563EB,#7C3AED)",
          opacity: 0.08,
          top: -120,
          left: -120,
          filter: "blur(30px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Logo */}

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
              width: 54,
              height: 54,
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

          <Box>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              SmartPro
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              Enterprise Procurement Suite
            </Typography>
          </Box>
        </Box>

        {/* Heading */}

        <Typography
          sx={{
            fontSize: {
              xs: 30,
              sm: 34,
              lg: 38,
              xl: 48,
            },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827",
          }}
        >
          Enterprise Procurement
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 30,
              sm: 34,
              lg: 38,
              xl: 48,
            },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#4F46E5",
            mb: 2,
          }}
        >
          Made Simple.
        </Typography>

        {/* Description */}

        <Typography
          sx={{
            maxWidth: 560,
            color: "#6B7280",
            fontSize: 16,
            lineHeight: 1.8,
            mb: {
              xs: 3,
              lg: 1,
            },
          }}
        >
          Manage the complete procurement lifecycle from
          Purchase Request to Purchase Order through one
          intelligent enterprise platform.
        </Typography>

        {/* Mobile Illustration */}

        <Box
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={illustration}
            alt="Procurement Illustration"
            sx={{
              width: "100%",
              maxWidth: 260,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Desktop Bottom Section */}

        <Box
          sx={{
            display: {
              xs: "none",
              lg: "grid",
            },
            flex: 1,
            gridTemplateColumns: "40% 60%",
            gap: 2,
            alignItems: "center",
          }}
        >
          {/* Features */}

          <Stack spacing={2}>
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <Stack
                  key={item.title}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: "#EEF2FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4F46E5",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#374151",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/*
                    <Typography
                      fontSize="0.875rem"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                    */}
                  </Box>
                </Stack>
              );
            })}
          </Stack>

          {/* Illustration */}

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={illustration}
              alt="Procurement Illustration"
              sx={{
                width: "100%",
                maxWidth: 420,
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginLeftPanel;