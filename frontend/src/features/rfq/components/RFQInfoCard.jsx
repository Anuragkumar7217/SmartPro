import {
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function Row({
  label,
  children,
}) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={1}
      >
        <Typography
          color="text.secondary"
          fontWeight={600}
        >
          {label}
        </Typography>

        {children}
      </Stack>

      <Divider />
    </>
  );
}

function RFQInfoCard({ rfq }) {
  if (!rfq) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        RFQ Information
      </Typography>

      <Stack>
        <Row label="RFQ Number">
          <Typography>{rfq.rfqNumber}</Typography>
        </Row>

        <Row label="Status">
          <StatusChip status={rfq.status} />
        </Row>

        <Row label="PR Number">
          <Typography>
            {rfq.purchaseRequest?.prNumber || "-"}
          </Typography>
        </Row>

        <Row label="Created On">
          <Typography>
            {new Date(
              rfq.createdAt
            ).toLocaleString()}
          </Typography>
        </Row>

        <Row label="Remarks">
          <Typography
            textAlign="right"
            sx={{
              maxWidth: 280,
            }}
          >
            {rfq.remarks || "-"}
          </Typography>
        </Row>
      </Stack>
    </Paper>
  );
}

export default RFQInfoCard;