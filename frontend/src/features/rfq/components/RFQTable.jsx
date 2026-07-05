import { useState } from "react";

import {
  Box,
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

function RFQTable({
  rfqs = [],
  selectedRFQ,
  onSelect,

  disableRowClick = false,
  disablePagination = false,
  title = "RFQs",
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 6;

  const tableData = rfqs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (!rfqs.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
        >
          No RFQs Found
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          Create your first RFQ from an approved
          purchase request.
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
          {title}
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                RFQ
              </TableCell>

              <TableCell align="center">
                PR
              </TableCell>

              <TableCell align="center">
                Vendors
              </TableCell>

              <TableCell align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((rfq) => (
              <TableRow
                hover={!disableRowClick}
                key={rfq._id}
                selected={
                  !disableRowClick &&
                  selectedRFQ?._id === rfq._id
                }
                onClick={() => {
                  if (!disableRowClick) {
                    onSelect?.(rfq);
                  }
                }}
                sx={{
                  cursor: disableRowClick
                    ? "default"
                    : "pointer",
                }}
              >
                <TableCell align="center">
                  <Chip
                    size="small"
                    color="primary"
                    variant="outlined"
                    label={rfq.rfqNumber}
                  />
                </TableCell>

                <TableCell align="center">
                  {rfq.purchaseRequest
                    ?.prNumber || "-"}
                </TableCell>

                <TableCell align="center">
                  {rfq.vendors?.length}
                </TableCell>

                <TableCell align="center">
                  <StatusChip
                    status={rfq.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!disablePagination && (
        <TablePagination
          component="div"
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[6]}
          count={rfqs.length}
          page={page}
          onPageChange={(_, page) =>
            setPage(page)
          }
        />
      )}
    </Paper>
  );
}

export default RFQTable;