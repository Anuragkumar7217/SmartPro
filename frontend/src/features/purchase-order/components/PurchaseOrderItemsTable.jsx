import {
  Card,
  CardContent,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function PurchaseOrderItemsTable({
  items = [],
}) {
  const grandTotal = items.reduce(
    (sum, item) =>
      sum +
      (item.quantity || 0) *
        (item.unitPrice || 0),
    0
  );

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Purchase Order Items
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  Item
                </TableCell>

                <TableCell align="center">
                  Quantity
                </TableCell>

                <TableCell align="center">
                  Unit Price (₹)
                </TableCell>

                <TableCell align="center">
                  Total (₹)
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.length > 0 ? (
                <>
                  {items.map(
                    (item, index) => (
                      <TableRow
                        key={
                          item._id ||
                          index
                        }
                      >
                        <TableCell align="center">
                          {item.itemName}
                        </TableCell>

                        <TableCell align="center">
                          {item.quantity}
                        </TableCell>

                        <TableCell align="center">
                          ₹
                          {Number(
                            item.unitPrice || 0
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </TableCell>

                        <TableCell align="center">
                          ₹
                          {(
                            (item.quantity ||
                              0) *
                            (item.unitPrice ||
                              0)
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  )}

                  <TableRow>
                    <TableCell
                      colSpan={3}
                      align="right"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      Grand Total
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      ₹
                      {grandTotal.toLocaleString(
                        "en-IN"
                      )}
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                  >
                    No items available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default PurchaseOrderItemsTable;