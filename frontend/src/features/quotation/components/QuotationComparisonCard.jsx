import {
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import QuotationComparisonTable from "./QuotationComparisonTable";

function QuotationComparisonCard({
  comparison,
  selectedQuotation,
  loading,
  onVendorClick,
  onSelect,
}) {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Quotation Comparison
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <QuotationComparisonTable
          comparison={comparison}
          selectedQuotation={selectedQuotation}
          loading={loading}
          onVendorClick={onVendorClick}
          onSelect={onSelect}
        />
      </CardContent>
    </Card>
  );
}

export default QuotationComparisonCard;