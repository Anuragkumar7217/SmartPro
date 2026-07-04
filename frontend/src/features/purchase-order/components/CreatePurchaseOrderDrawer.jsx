import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import SelectedQuotationTable from "./SelectedQuotationTable";

function CreatePurchaseOrderDrawer({
  open,
  onClose,
  quotations = [],
  loading = false,
  creatingQuotationId = null,
  onCreate,
}) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 900,
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Create Purchase Order
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: 3 }}
        >
          Only quotations selected from closed RFQs are eligible
          for Purchase Order creation.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ flex: 1, overflow: "auto" }}>
          <SelectedQuotationTable
            quotations={quotations}
            loading={loading}
            creatingQuotationId={creatingQuotationId}
            onCreate={onCreate}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="outlined"
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default CreatePurchaseOrderDrawer;