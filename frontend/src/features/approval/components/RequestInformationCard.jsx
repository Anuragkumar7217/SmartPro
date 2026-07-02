import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function DetailItem({
  label,
  value,
}) {
  return (
    <Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 0.5,
          wordBreak: "break-word",
        }}
      >
        {value || "-"}
      </Typography>
    </Box>
  );
}

function RequestInformationCard({
  request,
}) {
  if (!request) {
    return null;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={1}
      >
        Purchase Request Details
      </Typography>

      <Stack spacing={1}>
        <DetailItem
          label="PR Number"
          value={request.prNumber}
        />

        <Divider />

        <DetailItem
          label="Title"
          value={request.title}
        />

        <Divider />

        <DetailItem
          label="Description"
          value={request.description}
        />

        <Divider />

        <DetailItem
          label="Business Justification"
          value={request.reason}
        />

        <Divider />

        <DetailItem
          label="Requested By"
          value={`${request.createdBy.firstName} ${request.createdBy.lastName}`}
        />

        <Divider />

        <DetailItem
          label="Email"
          value={request.createdBy.email}
        />

        <Divider />

        <DetailItem
          label="Submitted On"
          value={new Date(
            request.createdAt
          ).toLocaleString()}
        />
      </Stack>
    </Paper>
  );
}

export default RequestInformationCard;