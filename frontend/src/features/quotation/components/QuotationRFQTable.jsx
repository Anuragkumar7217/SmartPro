import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function QuotationRFQTable({
  rfqs,
  selectedRFQ,
  onSelect,
}) {
  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>RFQ</TableCell>

              <TableCell>PR</TableCell>

              <TableCell align="center">
                Vendors
              </TableCell>

              <TableCell align="center">
                Quotations
              </TableCell>

              <TableCell align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rfqs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                >
                  <Typography color="text.secondary">
                    No Closed RFQs Found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              rfqs.map((rfq) => {
                const quotationCount =
                  rfq.quotationCount ?? 0;

                const vendorCount =
                  rfq.vendors?.length ?? 0;

                const selected =
                  selectedRFQ?._id === rfq._id;

                return (
                  <TableRow
                    hover
                    key={rfq._id}
                    selected={selected}
                  >
                    <TableCell>
                      {rfq.rfqNumber}
                    </TableCell>

                    <TableCell>
                      {
                        rfq.purchaseRequest
                          ?.prNumber
                      }
                    </TableCell>

                    <TableCell align="center">
                      {vendorCount}
                    </TableCell>

                    <TableCell align="center">
                      {quotationCount} / {vendorCount}
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() =>
                          onSelect(rfq)
                        }
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default QuotationRFQTable;