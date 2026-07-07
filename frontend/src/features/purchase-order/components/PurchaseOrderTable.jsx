import { useState } from "react";

import {
  Box,
  Chip,
  CircularProgress,
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

function PurchaseOrderTable({
  purchaseOrders = [],
  loading = false,
  selectedPurchaseOrder,
  onSelect,

  title = "Purchase Orders",
  disableRowClick = false,
  disablePagination = false,
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 6;

  const tableData = purchaseOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (loading) {
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
        <CircularProgress />
      </Paper>
    );
  }

  if (!purchaseOrders.length) {
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
          No Purchase Orders Found
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          Create your first purchase order.
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
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                PO
              </TableCell>

              <TableCell align="center">
                Amount (₹)
              </TableCell>

              <TableCell align="center">
                Created On
              </TableCell>

              <TableCell align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((purchaseOrder) => (
              <TableRow
                hover
                key={purchaseOrder._id}
                selected={
                  !disableRowClick &&
                  selectedPurchaseOrder?._id === purchaseOrder._id
                }
                onClick={() => {
                  if (!disableRowClick) {
                    onSelect?.(purchaseOrder);
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
                    label={purchaseOrder.poNumber}
                  />
                </TableCell>

                <TableCell align="center">
                  ₹
                  {Number(
                    purchaseOrder.totalAmount ??
                      purchaseOrder.quotation?.totalAmount ??
                      0
                  ).toLocaleString("en-IN")}
                </TableCell>

                <TableCell align="center">
                  {purchaseOrder.createdAt
                    ? new Date(
                        purchaseOrder.createdAt
                      ).toLocaleDateString("en-IN")
                    : "-"}
                </TableCell>

                <TableCell align="center">
                  <StatusChip
                    status={purchaseOrder.status}
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
          count={purchaseOrders.length}
          page={page}
          onPageChange={(_, page) =>
            setPage(page)
          }
        />
      )}
    </Paper>
  );
}

export default PurchaseOrderTable;