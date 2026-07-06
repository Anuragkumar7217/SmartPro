import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function QuotationRowDetails({
  quotation,
}) {
  if (!quotation) {
    return null;
  }

  return (
    <Box
      sx={{
        px: 2,
        pb: 2,
        pt: 1,
        bgcolor: "#F8FAFC",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #E5E7EB",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.2,
            borderBottom: "1px solid #E5E7EB",
            bgcolor: "#FFFFFF",
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight={700}
          >
            Item Details
          </Typography>
        </Box>

        <TableContainer>
          <Table
            size="small"
            sx={{
              "& .MuiTableCell-head": {
                fontWeight: 700,
                bgcolor: "#F9FAFB",
              },
            }}
          >
            <TableHead>
  <TableRow>
    <TableCell align="center">
      Item
    </TableCell>

    <TableCell align="center">
      Qty
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
  {quotation.items?.map((item) => (
    <TableRow key={item._id}>
      <TableCell align="center">
        {item.itemName}
      </TableCell>

      <TableCell align="center">
        {item.quantity}
      </TableCell>

      <TableCell align="center">
        ₹
        {item.unitPrice.toLocaleString(
          "en-IN"
        )}
      </TableCell>

      <TableCell
        align="center"
        sx={{
          fontWeight: 600,
        }}
      >
        ₹
        {(
          item.quantity *
          item.unitPrice
        ).toLocaleString("en-IN")}
      </TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default QuotationRowDetails;