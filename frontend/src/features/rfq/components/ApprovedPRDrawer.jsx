import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
  Checkbox,
FormControlLabel,
FormGroup,
Grid,
Paper,
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
              sm: 520,
            },
            maxWidth: 650,
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
  <Accordion
    expanded
    sx={{
      mt: "auto",
      boxShadow: "none",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 2,
      "&:before": {
        display: "none",
      },
    }}
  >
          <AccordionSummary
            expandIcon={<ChevronDown size={18} />}
          >
            <Typography fontWeight={600}>
              Select Vendors and Create RFQ
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack spacing={3}>
              <Paper
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight={600}
            mb={2}
          >
            Select Vendors
          </Typography>

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
                                (id) =>
                                  id !== vendor._id
                              )
                            );
                          }
                        }}
                      />
                    }
                    label={vendor.companyName}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </Paper>
              <TextField
                label="Remarks"
                multiline
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
              />

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() =>
                    setExpanded(false)
                  }
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
            </Stack>
          </AccordionDetails>
        </Accordion>
)}
      </Box>
    </Drawer>
  );
}

export default ApprovedPRDrawer;