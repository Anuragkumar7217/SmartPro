import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import VendorForm from "./VendorForm";

const initialForm = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  address: "",
};

function VendorDrawer({
  open,
  loading = false,
  onClose,
  onCreate,
}) {
  const [formData, setFormData] =
    useState(initialForm);

  useEffect(() => {
    if (open) {
      setFormData(initialForm);
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    onCreate(formData, () =>
      setFormData(initialForm)
    );
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
              sm: 640,
            },
            maxWidth: 600,
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
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#443faa",
            }}
          >
            Add Vendor
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Register a new vendor for procurement.
          </Typography>
        </Box>

        <Divider />

        <VendorForm
          formData={formData}
          onChange={handleChange}
        />

        <Divider sx={{ mt: "auto" }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
        >
          <Button
            variant="outlined"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleCreate}
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Create Vendor"}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default VendorDrawer;