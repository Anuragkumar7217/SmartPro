import {
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

function RequestedItemsTable({ items = [] }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
      }}
    >
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
              <TableCell sx={{ fontWeight: 700 }}>
                Item Name
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  fontWeight: 700,
                  width: 120,
                }}
              >
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <TableRow
                  key={index}
                  hover
                >
                  <TableCell>
                    <Typography fontWeight={500}>
                      {item.itemName}
                    </Typography>
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
                  <Typography color="text.secondary">
                    No items available.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RequestedItemsTable;