import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function PurchaseOrderInfoCard({
  purchaseOrder,
}) {
  if (!purchaseOrder) {
    return null;
  }

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Purchase Order Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              PO Number
            </Typography>

            <Typography>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={purchaseOrder.poNumber}
              />
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Vendor
            </Typography>

            <Typography fontWeight={600}>
              {purchaseOrder.vendor?.companyName ||
                "-"}
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              RFQ Number
            </Typography>

            <Typography>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={purchaseOrder.rfq?.rfqNumber || "-"}
              />
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Quotation Number
            </Typography>

            <Typography>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={purchaseOrder.quotation?.quotationNumber || "-"}
              />
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Status
            </Typography>

            <Box mt={0.5}>
              <Chip
                label={purchaseOrder.status}
                color={
                  purchaseOrder.status ===
                    "ISSUED"
                    ? "success"
                    : purchaseOrder.status ===
                      "CANCELLED"
                      ? "error"
                      : "warning"
                }
                size="small"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Total Amount
            </Typography>

            <Typography fontWeight={600}>
              ₹
              {Number(
                purchaseOrder.totalAmount || 0
              ).toLocaleString("en-IN")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Created On
            </Typography>

            <Typography fontWeight={600}>
              {purchaseOrder.createdAt
                ? new Date(
                  purchaseOrder.createdAt
                ).toLocaleDateString()
                : "-"}
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Remarks
            </Typography>

            <Typography fontWeight={600}>
              {purchaseOrder.remarks || "-"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PurchaseOrderInfoCard;