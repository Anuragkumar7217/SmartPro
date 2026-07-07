import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function RFQInfoCard({ rfq }) {
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
          RFQ Information
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

            <Box mt={0.5}>
              <Chip
                size="small"
                color="primary"
                variant="outlined"
                label={rfq.rfqNumber}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              PR Number
            </Typography>

            <Box mt={0.5}>
              {rfq.purchaseRequest?.prNumber ? (
                <Chip
                  size="small"
                  color="primary"
                  variant="outlined"
                  label={rfq.purchaseRequest.prNumber}
                />
              ) : (
                <Typography fontWeight={600}>
                  -
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Status
            </Typography>

            <Box mt={0.5}>
              <StatusChip
                status={rfq.status}
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
              ).toLocaleDateString("en-IN")}
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

export default RFQInfoCard;