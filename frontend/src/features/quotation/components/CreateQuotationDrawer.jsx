import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function CreateQuotationDrawer({
  open,
  onClose,
  rfq,
  vendors = [],
  quotations = [],
  onSubmit,
  loading,
}) {
  const [vendor, setVendor] = useState("");
  const [remarks, setRemarks] = useState("");
  const [items, setItems] = useState([]);

  const availableVendors = useMemo(() => {
    return vendors.filter(
      (vendor) =>
        !quotations.some(
          (quotation) =>
            quotation.vendor?._id === vendor._id
        )
    );
  }, [vendors, quotations]);

  useEffect(() => {
    if (!rfq) return;

    setVendor(availableVendors[0]?._id || "");
    setRemarks("");

    setItems(
      (rfq.purchaseRequest?.items || []).map(
        (item) => ({
          itemName: item.itemName,
          quantity: item.quantity,
          unitPrice: "",
        })
      )
    );
  }, [rfq, availableVendors]);

  const handlePriceChange = (
    index,
    value
  ) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              unitPrice: value,
            }
          : item
      )
    );
  };

  const grandTotal = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          (Number(item.unitPrice) || 0),
      0
    );
  }, [items]);

  const handleSubmit = () => {
    onSubmit({
      rfq: rfq._id,
      vendor,
      remarks,
      items: items.map((item) => ({
        itemName: item.itemName,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
      })),
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 850,
          },
        },
      }}
    >
      <Box p={3}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Add Quotation
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          Create quotation for this RFQ.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {rfq && (
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              mb: 3,
            }}
          >
            <Stack
              direction="row"
              spacing={5}
            >
              <Box>
                <Typography variant="caption">
                  RFQ Number
                </Typography>

                <Typography fontWeight={700}>
                  {rfq.rfqNumber}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption">
                  Status
                </Typography>

                <StatusChip
                  status={rfq.status}
                />
              </Box>

              <Box>
                <Typography variant="caption">
                  PR Number
                </Typography>

                <Typography fontWeight={700}>
                  {
                    rfq.purchaseRequest
                      ?.prNumber
                  }
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption">
                  Created On
                </Typography>

                <Typography fontWeight={700}>
                  {new Date(
                    rfq.createdAt
                  ).toLocaleDateString()}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption">
                  Remarks
                </Typography>

                <Typography fontWeight={700}>
                  {rfq.remarks || "-"}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        )}

        <Stack spacing={3}>
          <TextField
            select
            fullWidth
            label="Vendor"
            value={vendor}
            onChange={(e) =>
              setVendor(e.target.value)
            }
          >
            {availableVendors.map((vendor) => (
              <MenuItem
                key={vendor._id}
                value={vendor._id}
              >
                {vendor.companyName}
              </MenuItem>
            ))}
          </TextField>

          {availableVendors.length === 0 && (
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
                All assigned vendors have already
                submitted their quotations.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={0.5}
              >
                You can now close this RFQ to
                proceed for quotation comparison.
              </Typography>
            </Paper>
          )}

          <TableContainer
            component={Paper}
            variant="outlined"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Item
                  </TableCell>

                  <TableCell align="center">
                    Quantity
                  </TableCell>

                  <TableCell align="center">
                    Unit Price
                  </TableCell>

                  <TableCell align="right">
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map(
                  (item, index) => (
                    <TableRow
                      key={index}
                    >
                      <TableCell>
                        {item.itemName}
                      </TableCell>

                      <TableCell align="center">
                        {item.quantity}
                      </TableCell>

                      <TableCell align="center">
                        <TextField
                          size="small"
                          type="number"
                          value={
                            item.unitPrice
                          }
                          onChange={(
                            e
                          ) =>
                            handlePriceChange(
                              index,
                              e.target
                                .value
                            )
                          }
                        />
                      </TableCell>

                      <TableCell align="right">
                        ₹
                        {(
                          item.quantity *
                          (Number(
                            item.unitPrice
                          ) || 0)
                        ).toLocaleString()}
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
                    {grandTotal.toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TextField
            multiline
            rows={4}
            label="Remarks"
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
          />

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              disabled={
                loading ||
                !vendor ||
                availableVendors.length === 0
              }
              onClick={handleSubmit}
            >
              Submit Quotation
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default CreateQuotationDrawer;