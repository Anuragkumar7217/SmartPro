import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function QuotationInfoCard({ rfq }) {
  if (!rfq) {
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
          Quotation Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
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
                label={rfq.rfqNumber}
              />
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              PR Number
            </Typography>

            <Typography>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={rfq.purchaseRequest?.prNumber}
              />
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Status
            </Typography>

            <Box mt={0.5}>
              <Chip
                label={rfq.status}
                color="error"
                size="small"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Created On
            </Typography>

            <Typography fontWeight={600}>
              {new Date(
                rfq.createdAt
              ).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid size={12}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Remarks
            </Typography>

            <Typography fontWeight={600}>
              {rfq.remarks || "-"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default QuotationInfoCard;