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
            width: {
              xs: "100%",
              sm: 640,
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
            Create Purchase Order
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Only quotations selected from closed RFQs are eligible for Purchase
            Order creation.
          </Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <SelectedQuotationTable
            quotations={quotations}
            loading={loading}
            creatingQuotationId={creatingQuotationId}
            onCreate={onCreate}
          />
        </Box>

        <Divider sx={{ mt: "auto" }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
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