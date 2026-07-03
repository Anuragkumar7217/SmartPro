import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function QuotationDetailPanel({
  rfq,
  quotations,
  onCreateQuotation,
  onCompare,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
      }}
    >
      <Stack spacing={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
            >
              {rfq.rfqNumber}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Purchase Request{" "}
              {rfq.purchaseRequest?.prNumber}
            </Typography>
          </Box>

          <Box
            display="flex"
            gap={2}
          >
            <Button
              variant="outlined"
              onClick={onCompare}
            >
              Compare
            </Button>

            {rfq.status ===
              "ISSUED" && (
              <Button
                variant="contained"
                onClick={
                  onCreateQuotation
                }
              >
                Add Quotation
              </Button>
            )}
          </Box>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Status
          </Typography>

          <Typography
            fontWeight={600}
          >
            {rfq.status}
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h6"
            mb={2}
          >
            Requested Items
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Item
                </TableCell>

                <TableCell>
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rfq.purchaseRequest?.items?.map(
                (
                  item,
                  index
                ) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell>
                      {
                        item.itemName
                      }
                    </TableCell>

                    <TableCell>
                      {
                        item.quantity
                      }
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h6"
            mb={2}
          >
            Assigned Vendors
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Company
                </TableCell>

                <TableCell>
                  Contact
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rfq.vendors?.map(
                (vendor) => (
                  <TableRow
                    key={
                      vendor._id
                    }
                  >
                    <TableCell>
                      {
                        vendor.companyName
                      }
                    </TableCell>

                    <TableCell>
                      {
                        vendor.contactPerson
                      }
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h6"
            mb={2}
          >
            Quotations
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Quotation
                </TableCell>

                <TableCell>
                  Vendor
                </TableCell>

                <TableCell align="right">
                  Amount
                </TableCell>

                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {quotations.length ===
              0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                  >
                    No quotations
                    received.
                  </TableCell>
                </TableRow>
              ) : (
                quotations.map(
                  (
                    quotation
                  ) => (
                    <TableRow
                      key={
                        quotation._id
                      }
                    >
                      <TableCell>
                        {
                          quotation.quotationNumber
                        }
                      </TableCell>

                      <TableCell>
                        {
                          quotation
                            .vendor
                            ?.companyName
                        }
                      </TableCell>

                      <TableCell align="right">
                        ₹
                        {quotation.totalAmount?.toLocaleString()}
                      </TableCell>

                      <TableCell>
                        {
                          quotation.status
                        }
                      </TableCell>
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </Box>
      </Stack>
    </Paper>
  );
}

export default QuotationDetailPanel;