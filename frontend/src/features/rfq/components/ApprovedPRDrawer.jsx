import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { ChevronDown } from "lucide-react";

import RequestInformationCard from "../../../components/common/RequestInformationCard";
import RequestedItemsTable from "../../../components/common/RequestedItemsTable";

function ApprovedPRDrawer({
  open,
  request,
  vendors,
  loading,
  onSubmit,
  onClose,
}) {
  const [expanded, setExpanded] =
  useState(false);

const [selectedVendors, setSelectedVendors] =
  useState([]);

const [remarks, setRemarks] =
  useState("");

useEffect(() => {
  if (open) {
    setExpanded(false);
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
          gap: 2,
          height: "100%",
          overflowY: "auto",
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
            Approved Purchase Request
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Review the purchase request before creating an RFQ.
          </Typography>
        </Box>

        <Divider />

        <RequestInformationCard request={request} />

        <RequestedItemsTable
          items={request?.items}
        />

{!expanded && (
  <Box
    sx={{
      mt: "auto",
      display: "flex",
      gap: 2,
    }}
  >
    <Button
      fullWidth
      variant="outlined"
      onClick={onClose}
    >
      Close
    </Button>

    <Button
      fullWidth
      variant="contained"
      onClick={() =>
        setExpanded(true)
      }
    >
      Select Vendors
    </Button>
  </Box>
)}

        {expanded && (
          <>
  <Paper
    elevation={0}
    variant="outlined"
    sx={{
      mt: 2,
      p: 3,
      borderRadius: 3,
    }}
  >
    <Typography
      variant="h6"
      fontWeight={700}
      mb={2}
    >
      Select Vendors
    </Typography>

    <Divider sx={{ mb: 3 }} />

    <FormGroup>
      <Grid container spacing={1}>
        {vendors.map((vendor) => (
          <Grid
            size={{ xs: 12, sm: 6 }}
            key={vendor._id}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedVendors.includes(
                    vendor._id
                  )}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedVendors((prev) => [
                        ...prev,
                        vendor._id,
                      ]);
                    } else {
                      setSelectedVendors((prev) =>
                        prev.filter(
                          (id) => id !== vendor._id
                        )
                      );
                    }
                  }}
                />
              }
              label={
                <Typography fontWeight={500}>
                  {vendor.companyName}
                </Typography>
              }
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>

    <TextField
      fullWidth
      multiline
      label="Remarks"
      value={remarks}
      onChange={(e) =>
        setRemarks(e.target.value)
      }
      sx={{ mt: 3 }}
    />
  </Paper>
  <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
      }}
    >
      <Button
        fullWidth
        variant="outlined"
        onClick={() => setExpanded(false)}
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
    </>
)}
      </Box>
    </Drawer>
  );
}

export default ApprovedPRDrawer;