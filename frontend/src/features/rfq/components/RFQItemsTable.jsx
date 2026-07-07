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

function RFQItemsTable({
  items = [],
}) {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Requested Items
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Item
                </TableCell>

                <TableCell align="center">
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.itemName}
                    </TableCell>

                    <TableCell align="center">
                      {item.quantity}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={2}
                    align="center"
                  >
                    No requested items.
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

export default RFQItemsTable;