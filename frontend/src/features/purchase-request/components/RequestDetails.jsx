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

function getStatusColor(status) {
  switch (status) {
    case "APPROVED":
      return "success";

    case "REJECTED":
      return "error";

    case "SUBMITTED":
      return "warning";

    default:
      return "default";
  }
}

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
            variant="h5"
            fontWeight={700}
          >
            Purchase Request Details
          </Typography>

          <Typography color="text.secondary">
            Complete information about the selected purchase request.
          </Typography>
        </Box>

        <Chip
          label={request.status}
          color={getStatusColor(
            request.status
          )}
        />
      </Stack>

      <Divider sx={{ mb: 4 }} />

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
            value={request.prNumber}
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

      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Requested Items
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={80}>
              <strong>#</strong>
            </TableCell>

            <TableCell>
              <strong>Item Name</strong>
            </TableCell>

            <TableCell width={180}>
              <strong>Quantity</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {request.items.map(
            (item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {index + 1}
                </TableCell>

                <TableCell>
                  {item.itemName}
                </TableCell>

                <TableCell>
                  {item.quantity}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RequestDetails;