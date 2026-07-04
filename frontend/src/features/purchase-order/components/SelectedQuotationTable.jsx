import {
  Button,
  Card,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function SelectedQuotationTable({
  quotations = [],
  loading = false,
  creatingQuotationId = null,
  onCreate,
}) {
  if (loading) {
    return (
      <Card
        sx={{
          p: 4,
          textAlign: "center",
        }}
      >
        <CircularProgress />
      </Card>
    );
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>

              <TableCell>RFQ</TableCell>

              <TableCell>PR</TableCell>

              <TableCell>Quotation</TableCell>

              <TableCell align="right">
                Amount
              </TableCell>

              <TableCell align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {quotations.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                >
                  <Typography color="text.secondary">
                    No selected quotations available.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              quotations.map((quotation) => (
                <TableRow
                  hover
                  key={quotation.quotationId}
                >
                  <TableCell>
                    {quotation.vendor || "-"}
                  </TableCell>

                  <TableCell>
                    {quotation.rfqNumber}
                  </TableCell>

                  <TableCell>
                    {quotation.prNumber}
                  </TableCell>

                  <TableCell>
                    {quotation.quotationNumber}
                  </TableCell>

                  <TableCell align="right">
                    ₹
                    {Number(
                      quotation.amount ?? 0
                    ).toLocaleString("en-IN")}
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="contained"
                      disabled={
                        creatingQuotationId ===
                        quotation.quotationId
                      }
                      onClick={() =>
                        onCreate(
                          quotation.quotationId
                        )
                      }
                    >
                      {creatingQuotationId ===
                      quotation.quotationId ? (
                        <CircularProgress
                          size={18}
                          color="inherit"
                        />
                      ) : (
                        "Create PO"
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default SelectedQuotationTable;