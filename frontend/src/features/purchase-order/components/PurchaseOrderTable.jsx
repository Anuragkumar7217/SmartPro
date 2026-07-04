import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function PurchaseOrderTable({
  purchaseOrders = [],
  loading = false,
  selectedPurchaseOrder,
  onSelect,
}) {
  if (loading) {
    return (
      <Paper
        elevation={2}
        sx={{
          p: 5,
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
        elevation={2}
        sx={{
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography color="text.secondary">
          No Purchase Orders found.
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={2}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>PO Number</strong>
            </TableCell>

            <TableCell>
              <strong>Vendor</strong>
            </TableCell>

            <TableCell>
              <strong>Status</strong>
            </TableCell>

            <TableCell align="right">
              <strong>Amount</strong>
            </TableCell>

            <TableCell>
              <strong>Created On</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {purchaseOrders.map((purchaseOrder) => (
            <TableRow
              hover
              key={purchaseOrder._id}
              selected={
                selectedPurchaseOrder?._id ===
                purchaseOrder._id
              }
              onClick={() =>
                onSelect(purchaseOrder)
              }
              sx={{
                cursor: "pointer",
              }}
            >
              <TableCell>
                {purchaseOrder.poNumber}
              </TableCell>

              <TableCell>
                {purchaseOrder.vendor
                  ?.companyName || "-"}
              </TableCell>

              <TableCell>
                <StatusChip
                  status={
                    purchaseOrder.status
                  }
                />
              </TableCell>

              <TableCell align="right">
                ₹
                {Number(
                  purchaseOrder.totalAmount ??
                    purchaseOrder.quotation
                      ?.totalAmount ??
                    0
                ).toLocaleString("en-IN")}
              </TableCell>

              <TableCell>
                {purchaseOrder.createdAt
                  ? new Date(
                      purchaseOrder.createdAt
                    ).toLocaleDateString(
                      "en-IN"
                    )
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PurchaseOrderTable;