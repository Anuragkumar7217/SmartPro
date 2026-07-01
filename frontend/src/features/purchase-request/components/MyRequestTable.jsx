import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import { useState } from "react";

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
  const [page, setPage] = useState(0);

  const rowsPerPage = 5;

  const handleChangePage = (
    event,
    newPage
  ) => {
    setPage(newPage);
  };

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
            {requests
              .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              .map((request) => (
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
                      sx={{
                        borderRadius: 1,
                        color: "#625BEC",
                        borderColor: "#625BEC",
                        "&:hover": {
                          color: "#ffffff",
                          borderColor: "#4338CA",
                          backgroundColor: "#625BEC",
                        },
                      }}
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

      <TablePagination
        component="div"
        count={requests.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
}

export default MyRequestTable;