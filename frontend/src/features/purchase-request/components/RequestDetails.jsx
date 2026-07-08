import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

import RequestedItemsTable from "../../../components/common/RequestedItemsTable";

function DetailRow({
  label,
  value,
}) {
  return (
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={0.5}
      >
        {label}
      </Typography>

      <Typography fontWeight={600}>
        {value || "-"}
      </Typography>
    </Box>
  );
}

function RequestDetails({
  request,
}) {
  if (!request) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      {/* Header */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
          >
            Purchase Request Details
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Complete information about the selected purchase request.
          </Typography>
        </Box>

        <StatusChip status={request.status} />
      </Stack>

      <Divider sx={{ mb: 3 }} />

      {/* Basic Information */}

      <Grid
        container
        spacing={3}
        mb={4}
      >
<Grid
  size={{
    xs: 12,
    md: 6,
  }}
>
  <DetailRow
    label="PR Number"
    value={
      <Chip
        size="small"
        color="primary"
        variant="outlined"
        label={request.prNumber}
      />
    }
  />
</Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <DetailRow
            label="Created By"
            value={
              request.createdBy
                ? `${request.createdBy.firstName} ${request.createdBy.lastName}`
                : "-"
            }
          />
        </Grid>

        <Grid size={12}>
          <DetailRow
            label="Title"
            value={request.title}
          />
        </Grid>

        <Grid size={12}>
          <DetailRow
            label="Description"
            value={request.description}
          />
        </Grid>

        <Grid size={12}>
          <DetailRow
            label="Reason"
            value={request.reason}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <DetailRow
            label="Manager Comment"
            value={
              request.managerComment ||
              "No comments"
            }
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <DetailRow
            label="Approved By"
            value={
              request.approvedBy
                ? `${request.approvedBy.firstName} ${request.approvedBy.lastName}`
                : "-"
            }
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <DetailRow
            label="Created At"
            value={new Date(
              request.createdAt
            ).toLocaleString()}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <DetailRow
            label="Last Updated"
            value={new Date(
              request.updatedAt
            ).toLocaleString()}
          />
        </Grid>
      </Grid>

      <Divider sx={{ mb: 3 }} />

      {/* Items */}

      <RequestedItemsTable
          items={request?.items}
        />
    </Paper>
  );
}

export default RequestDetails;