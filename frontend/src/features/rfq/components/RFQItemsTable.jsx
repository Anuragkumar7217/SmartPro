import {
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
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Requested Items
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Item
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontWeight: 700 }}
              >
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.length ? (
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
                  No Items
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RFQItemsTable;