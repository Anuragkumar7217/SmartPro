import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function QuotationItemsTable({
  vendors = [],
  vendor,
  onVendorChange,
  items = [],
  onPriceChange,
  grandTotal = 0,
  remarks,
  onRemarksChange,
  loading = false,
  onCancel,
  onSubmit,
}) {
  return (
    <Stack spacing={3}>
      {vendors.length === 0 ? (
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            bgcolor: "success.50",
            borderColor: "success.light",
          }}
        >
          <Typography
            color="success.main"
            fontWeight={600}
          >
            All assigned vendors have already submitted their quotations.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={0.5}
          >
            You can now close this RFQ to proceed for quotation comparison.
          </Typography>
        </Paper>
      ) : (
        <Box
          sx={{
            pb: 3,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 2,
          }}
        >
<Stack
  direction="row"
  alignItems="center"
  sx={{
    ml:3,
  }}
>
  <Typography
    variant="h6"
    sx={{
      minWidth: 110,
      fontWeight: 500,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
    }}
  >
    Vendor List:
  </Typography>

  <TextField
    select
    size="small"
    sx={{
      width: 380,
    }}
    value={vendor}
    onChange={(e) =>
      onVendorChange(e.target.value)
    }
  >
    {vendors.map((vendor) => (
      <MenuItem
        key={vendor._id}
        value={vendor._id}
      >
        {vendor.companyName}
      </MenuItem>
    ))}
  </TextField>
</Stack>

          <TableContainer
  component={Paper}
  variant="outlined"
>
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell
          sx={{ fontWeight: 700 }}
        >
          Item
        </TableCell>

        <TableCell
          align="center"
          sx={{
            fontWeight: 700,
            width: 110,
          }}
        >
          Quantity
        </TableCell>

        <TableCell
          align="center"
          sx={{
            fontWeight: 700,
            width: 170,
          }}
        >
          Unit Price
        </TableCell>

        <TableCell
          align="right"
          sx={{
            fontWeight: 700,
            width: 140,
          }}
        >
          Total
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {items.length > 0 ? (
        <>
          {items.map((item, index) => (
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

              <TableCell align="center">
                <TextField
                  size="small"
                  type="number"
                  placeholder="0.00"
                  value={item.unitPrice}
                  onChange={(e) =>
                    onPriceChange(
                      index,
                      e.target.value
                    )
                  }
                  sx={{
                    width: 110,
                  }}
                />
              </TableCell>

              <TableCell align="right">
                <Typography fontWeight={500}>
                  ₹
                  {(
                    item.quantity *
                    (Number(
                      item.unitPrice
                    ) || 0)
                  ).toLocaleString("en-IN")}
                </Typography>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell
              colSpan={3}
              align="right"
              sx={{
                fontWeight: 700,
              }}
            >
              <Typography fontWeight={700}>
                Grand Total
              </Typography>
            </TableCell>

            <TableCell align="right">
              <Typography
                fontWeight={700}
                color="primary"
              >
                ₹
                {grandTotal.toLocaleString(
                  "en-IN"
                )}
              </Typography>
            </TableCell>
          </TableRow>
        </>
      ) : (
        <TableRow>
          <TableCell
            colSpan={4}
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

          <TextField
            multiline
            label="Remarks"
            value={remarks}
            onChange={(e) =>
              onRemarksChange(e.target.value)
            }
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={onCancel}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              disabled={
                loading ||
                !vendor ||
                items.some(
                  (item) =>
                    !item.unitPrice ||
                    Number(item.unitPrice) <= 0
                )
              }
              onClick={onSubmit}
            >
              Submit Quotation
            </Button>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}

export default QuotationItemsTable;