import {
  Stack,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import RFQInfoCard from "./RFQInfoCard";
import RFQVendorTable from "./RFQVendorTable";
import RFQItemsTable from "./RFQItemsTable";
import RFQActionButtons from "./RFQActionButtons";

function RFQDetailPanel({
  rfq,
  loading,
  onIssue,
  onClose,
}) {
  if (loading) {
    return <Loader />;
  }

  if (!rfq) {
    return (
      <Stack spacing={3}>
        <RFQInfoCard rfq={rfq} />

        <RFQVendorTable
          vendors={rfq?.vendors || []}
        />

        <RFQItemsTable
          items={rfq?.purchaseRequest?.items || []}
        />
      </Stack>
    );
  }

  return (
    <Stack spacing={3}>
      <RFQInfoCard rfq={rfq} />

      <RFQVendorTable
        vendors={rfq.vendors}
      />

      <RFQItemsTable
        items={rfq.purchaseRequest?.items || []}
      />

      <RFQActionButtons
        status={rfq.status}
        loading={loading}
        onIssue={onIssue}
        onClose={onClose}
      />
    </Stack>
  );
}

export default RFQDetailPanel;