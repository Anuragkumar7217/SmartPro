import {
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

function PurchaseOrderToolbar({
  search = "",
  onSearchChange = () => {},
  onCreatePurchaseOrder,
}) {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search by PO Number..."
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "stretch",
              md: "flex-end",
            },
          }}
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onCreatePurchaseOrder}
            sx={{
              maxWidth: {
                xs: "100%",
                md: 260,
              },
            }}
          >
            Create Purchase Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PurchaseOrderToolbar;