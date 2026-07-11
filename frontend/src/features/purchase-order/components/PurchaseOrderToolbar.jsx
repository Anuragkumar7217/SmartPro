import {
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

function PurchaseOrderToolbar({
  search = "",
  onSearchChange = () => { },
  onCreatePurchaseOrder,
}) {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
      >
        <Grid size={{ xs: 12, md: 9 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search by PO Number"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "background.paper",
                height: 40,
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onCreatePurchaseOrder}
            sx={{
              height: 40,
              whiteSpace: "nowrap",
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