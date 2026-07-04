import {
  Alert,
  Stack,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import RFQInfoCard from "./RFQInfoCard";
import RFQVendorTable from "./RFQVendorTable";
import RFQItemsTable from "./RFQItemsTable";
import RFQActionButtons from "./RFQActionButtons";

function RFQDetailPanel({
  rfq,
  quotations,
  loading,
  onIssue,
  onClose,
  onAddQuotation,
}) {
  if (loading) {
    return <Loader />;
  }

  if (!rfq) {
    return (
      <Alert severity="info">
        Select an RFQ from the left to view its details.
      </Alert>
    );
  }

  return (
    <Stack spacing={3}>
      <RFQActionButtons
        status={rfq.status}
        loading={loading}
        onIssue={onIssue}
        onClose={onClose}
        onAddQuotation={onAddQuotation}
      />
      
      <RFQItemsTable
        items={rfq.purchaseRequest?.items || []}
      />

      <RFQInfoCard rfq={rfq} />

      <RFQVendorTable
        vendors={rfq.vendors}
      />   
    </Stack>
  );
}

export default RFQDetailPanel;