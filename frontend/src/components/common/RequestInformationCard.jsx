import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function DetailItem({ label, value }) {
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

function RequestInformationCard({ request }) {
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

      <Divider sx={{ mb: 2 }} />

      <Stack spacing={2}>
  {/* PR Number + Submitted On */}
  <Grid
    container
    spacing={2}
  >
    <Grid size={{ xs: 12, md: 6 }}>
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 600 }}
        >
          PR Number
        </Typography>

        <Box sx={{ mt: 0.75 }}>
          <Chip
            label={request.prNumber}
            color="primary"
            variant="outlined"
            size="small"
            sx={{
              fontWeight: 600,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <DetailItem
        label="Submitted On"
        value={new Date(request.createdAt).toLocaleString()}
      />
    </Grid>
  </Grid>

  <Divider />

  {/* Requested By + Email */}
  <Grid
    container
    spacing={2}
  >
    <Grid size={{ xs: 12, md: 6 }}>
      <DetailItem
        label="Requested By"
        value={
          request.createdBy
            ? `${request.createdBy.firstName} ${request.createdBy.lastName}`
            : "-"
        }
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <DetailItem
        label="Email"
        value={request.createdBy?.email}
      />
    </Grid>
  </Grid>

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
    label="Approved By"
    value={
      request.approvedBy
        ? `${request.approvedBy.firstName} ${request.approvedBy.lastName}`
        : "-"
    }
  />

  <Divider />

  <DetailItem
    label="Manager Comment"
    value={request.managerComment}
  />
</Stack>
    </Paper>
  );
}

export default RequestInformationCard;