import {
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

function RecentRequests({
  requests,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.06)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Recent Purchase Requests
      </Typography>

      {requests.length === 0 ? (
        <Typography color="text.secondary">
          No requests available.
        </Typography>
      ) : (
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

                <TableCell align="right">
                  <strong>Created</strong>
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

                  <TableCell align="right">
                    {new Date(
                      request.createdAt
                    ).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}

export default RecentRequests;