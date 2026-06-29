import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

function StatCard({
  title,
  value,
  icon: Icon,
  color = "#4F46E5",
}) {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        borderRadius: 4,
        p: 3,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15,23,42,.05)",

        transition: ".25s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 18px 40px rgba(15,23,42,.10)",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={1}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight={700}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            bgcolor: `${color}15`,
            color: color,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon size={28} />
        </Box>
      </Stack>
    </Box>
  );
}

export default StatCard;