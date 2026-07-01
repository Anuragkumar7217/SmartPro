import {
  Box,
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

function PendingRequestsTable({
  requests,
  onReview,
}) {
  if (!requests.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 5,
          textAlign: "center",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          No Pending Requests
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          There are currently no purchase requests awaiting approval.
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>
              PR Number
            </TableCell>

            <TableCell sx={{ fontWeight: 700 }}>
              Title
            </TableCell>

            <TableCell sx={{ fontWeight: 700 }}>
              Requested By
            </TableCell>

            <TableCell sx={{ fontWeight: 700 }}>
              Submitted On
            </TableCell>

            <TableCell
              align="center"
              sx={{ fontWeight: 700 }}
            >
              Action
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
                <Chip
                  label={request.prNumber}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </TableCell>

              <TableCell>
                <Typography fontWeight={600}>
                  {request.title}
                </Typography>
              </TableCell>

              <TableCell>
                <Box>
                  <Typography fontWeight={500}>
                    {request.createdBy.firstName}{" "}
                    {request.createdBy.lastName}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {request.createdBy.email}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Typography>
                  {new Date(
                    request.createdAt
                  ).toLocaleDateString()}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {new Date(
                    request.createdAt
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => onReview(request)}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Review
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PendingRequestsTable;