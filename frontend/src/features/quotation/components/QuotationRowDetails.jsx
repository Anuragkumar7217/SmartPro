import {
  Box,
  Table,
  TableBody,
  TableCell,
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
        p: 3,
        bgcolor: "background.default",
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={700}
        mb={2}
      >
        Item Details
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              Item
            </TableCell>

            <TableCell>
              Quantity
            </TableCell>

            <TableCell>
              Unit Price
            </TableCell>

            <TableCell>
              Total
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {quotation.items?.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {item.itemName}
              </TableCell>

              <TableCell>
                {item.quantity}
              </TableCell>

              <TableCell>
                ₹
                {item.unitPrice.toLocaleString(
                  "en-IN"
                )}
              </TableCell>

              <TableCell>
                ₹
                {(
                  item.quantity *
                  item.unitPrice
                ).toLocaleString(
                  "en-IN"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box mt={3}>
        <Typography
          variant="subtitle2"
          fontWeight={700}
        >
          Remarks
        </Typography>

        <Typography color="text.secondary">
          {quotation.remarks || "-"}
        </Typography>
      </Box>
    </Box>
  );
}

export default QuotationRowDetails;