import { useEffect, useState } from "react";

import {
  Box,
  Button,
 Divider,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function CreateRFQDrawer({
  open,
  vendors = [],
  request,
  loading,
  onClose,
  onSubmit,
}) {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (open) {
      setSelectedVendors([]);
      setRemarks("");
    }
  }, [open]);

  const handleCreate = () => {
    onSubmit?.({
      purchaseRequest: request._id,
      vendors: selectedVendors,
      remarks,
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
            width: {
              xs: "100%",
              sm: 500,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="#443faa"
        >
          Create RFQ
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          Select vendors and create an RFQ.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={3}>
          <FormControl fullWidth>
            <InputLabel>
              Vendors
            </InputLabel>

            <Select
              multiple
              value={selectedVendors}
              onChange={(e) =>
                setSelectedVendors(
                  e.target.value
                )
              }
              input={
                <OutlinedInput label="Vendors" />
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
            </Select>
          </FormControl>

          <TextField
            label="Remarks"
            multiline
            rows={4}
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
          />
        </Stack>

        <Box
          sx={{
            mt: "auto",
            display: "flex",
            gap: 2,
            pt: 4,
          }}
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
            disabled={
              loading ||
              selectedVendors.length === 0
            }
            onClick={handleCreate}
          >
            Create RFQ
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default CreateRFQDrawer;