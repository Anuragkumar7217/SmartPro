import { useState } from "react";

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
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function ApprovedPRTable({
  requests = [],
  onView,
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 5;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const tableData = requests.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <Typography
          variant="h6"
          fontWeight={600}
        >
          No Approved Purchase Requests
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          There are currently no approved purchase requests available.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
        >
          Approved Purchase Requests
        </Typography>
      </Box>

      <TableContainer>
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
                Approved By
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Approved On
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Status
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
            {tableData.map((request) => (
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
                  <Typography fontWeight={500}>
                    {request.approvedBy.firstName}{" "}
                    {request.approvedBy.lastName}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {request.approvedBy.email}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography>
                    {new Date(
                      request.updatedAt
                    ).toLocaleDateString()}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {new Date(
                      request.updatedAt
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </TableCell>

                <TableCell>
  <StatusChip status={request.status} />
</TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => onView(request)}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                    }}
                  >
                    View Details
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
        labelRowsPerPage=""
      />
    </Paper>
  );
}

export default ApprovedPRTable;