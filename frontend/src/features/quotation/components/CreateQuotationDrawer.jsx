import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function CreateQuotationDrawer({
  open,
  onClose,
  rfq,
  vendors,
  onSubmit,
  loading,
}) {
  const [vendor, setVendor] = useState("");
  const [remarks, setRemarks] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!rfq) return;

    setVendor("");
    setRemarks("");

    setItems(
      (rfq.items || []).map((item) => ({
        itemName: item.itemName,
        quantity: item.quantity,
        unitPrice: "",
      }))
    );
  }, [rfq]);

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

  const handleCreate = () => {
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
            width: 550,
          },
        },
      }}
    >
      <Box p={3}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Create Quotation
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          Enter quotation prices for each item.
        </Typography>

        <Divider sx={{ mb: 3 }} />

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
            {vendors.map((vendor) => (
              <MenuItem
                key={vendor._id}
                value={vendor._id}
              >
                {vendor.companyName}
              </MenuItem>
            ))}
          </TextField>

          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography
                fontWeight={600}
                mb={1}
              >
                {item.itemName}
              </Typography>

              <Typography
                variant="body2"
                mb={2}
              >
                Quantity : {item.quantity}
              </Typography>

              <TextField
                fullWidth
                type="number"
                label="Unit Price"
                value={item.unitPrice}
                onChange={(e) =>
                  handlePriceChange(
                    index,
                    e.target.value
                  )
                }
              />
            </Box>
          ))}

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Remarks"
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
          />

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={handleCreate}
              disabled={loading}
            >
              Create Quotation
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default CreateQuotationDrawer;