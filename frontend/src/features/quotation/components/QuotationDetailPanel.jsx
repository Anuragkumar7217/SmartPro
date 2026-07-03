import {
  Alert,
  Stack,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import QuotationInfoCard from "./QuotationInfoCard";
import AssignedVendorsCard from "./AssignedVendorsCard";
import QuotationComparisonCard from "./QuotationComparisonCard";

function QuotationDetailPanel({
  rfq,
  comparison,
  selectedQuotation,
  loading,
  actionLoading,
  onVendorClick,
  onSelectQuotation,
}) {
  if (loading) {
    return <Loader />;
  }

  if (!rfq) {
    return (
      <Alert severity="info">
        Select an RFQ from the left to view quotation details.
      </Alert>
    );
  }

  return (
    <Stack spacing={3}>
      <QuotationInfoCard rfq={rfq} />

      <AssignedVendorsCard
        vendors={rfq.vendors || []}
      />

      <QuotationComparisonCard
        comparison={comparison}
        selectedQuotation={selectedQuotation}
        loading={actionLoading}
        onVendorClick={onVendorClick}
        onSelect={onSelectQuotation}
      />
    </Stack>
  );
}

export default QuotationDetailPanel;