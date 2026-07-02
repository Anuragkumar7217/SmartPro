import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";

import RequestInformationCard from "../../../components/common/RequestInformationCard";
import RequestedItemsTable from "../../../components/common/RequestedItemsTable";

function ApprovedPRDrawer({
  open,
  request,
  onClose,
  onCreateRFQ,
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
            onClick={() => onCreateRFQ?.(request)}
          >
            Create RFQ
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default ApprovedPRDrawer;