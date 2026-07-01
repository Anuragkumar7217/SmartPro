import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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

function MyRequestTable({
  requests,
  onView,
}) {
  if (requests.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 8,
          textAlign: "center",
          borderRadius: 5,
          border: "1px solid #E5E7EB",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
        >
          No Purchase Requests Found
        </Typography>

        <Typography color="text.secondary">
          Create your first Purchase Request.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        overflow: "hidden",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>PR Number</strong>
              </TableCell>

              <TableCell>
                <strong>Title</strong>
              </TableCell>

              <TableCell>
                <strong>Status</strong>
              </TableCell>

              <TableCell>
                <strong>Items</strong>
              </TableCell>

              <TableCell>
                <strong>Created</strong>
              </TableCell>

              <TableCell align="center">
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {requests.map((request) => (
              <TableRow
                hover
                key={request._id}
              >
                <TableCell>
                  {request.prNumber}
                </TableCell>

                <TableCell>
                  {request.title}
                </TableCell>

                <TableCell>
                  <Chip
                    size="small"
                    label={request.status}
                    color={getStatusColor(
                      request.status
                    )}
                  />
                </TableCell>

                <TableCell>
                  {request.items.length}
                </TableCell>

                <TableCell>
                  {new Date(
                    request.createdAt
                  ).toLocaleDateString()}
                </TableCell>

                <TableCell align="center">
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={
                      <VisibilityOutlinedIcon />
                    }
                    onClick={() =>
                      onView(request._id)
                    }
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default MyRequestTable;