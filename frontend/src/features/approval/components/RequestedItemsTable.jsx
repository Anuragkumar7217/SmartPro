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

function RequestedItemsTable({ items = [] }) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 700,
              }}
            >
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
              <TableRow key={index} hover>
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
                sx={{
                  py: 4,
                }}
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
  );
}

export default RequestedItemsTable;