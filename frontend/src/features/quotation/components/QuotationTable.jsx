import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function QuotationTable({
  rfqs,
  selectedRFQ,
  onSelect,
}) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>RFQ</strong>
            </TableCell>

            <TableCell>
              <strong>PR</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Vendors</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Status</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rfqs.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                align="center"
              >
                <Typography
                  color="text.secondary"
                >
                  No RFQs found.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            rfqs.map((rfq) => (
              <TableRow
                hover
                key={rfq._id}
                onClick={() =>
                  onSelect(rfq)
                }
                selected={
                  selectedRFQ?._id ===
                  rfq._id
                }
                sx={{
                  cursor: "pointer",
                }}
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
                  {rfq.vendors?.length ||
                    0}
                </TableCell>

                <TableCell align="center">
                  {rfq.status}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default QuotationTable;