import {
  Box,
  Button,
  Typography,
} from "@mui/material";

function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) {
  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            color="text.secondary"
            mt={0.5}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {buttonText && (
        <Button
          variant="contained"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}

export default PageHeader;