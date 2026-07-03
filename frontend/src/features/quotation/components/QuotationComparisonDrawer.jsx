import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

function QuotationComparisonDrawer({
  open,
  onClose,
  comparison,
  onSelect,
  loading,
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
              sm: 650,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Quotation Comparison
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
        >
          Compare all quotations and select the best
          vendor.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TableContainer
          component={Paper}
          elevation={0}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Rank
                </TableCell>

                <TableCell>
                  Vendor
                </TableCell>

                <TableCell>
                  Quotation
                </TableCell>

                <TableCell align="right">
                  Amount
                </TableCell>

                <TableCell>
                  Status
                </TableCell>

                <TableCell align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(comparison?.quotations || [])
                .length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                  >
                    No quotations available.
                  </TableCell>
                </TableRow>
              ) : (
                comparison.quotations.map(
                  (quotation) => (
                    <TableRow
                      key={
                        quotation.quotationId
                      }
                    >
                      <TableCell>
                        {quotation.rank}
                      </TableCell>

                      <TableCell>
                        {quotation.vendor}
                      </TableCell>

                      <TableCell>
                        {
                          quotation.quotationNumber
                        }
                      </TableCell>

                      <TableCell align="right">
                        ₹
                        {quotation.totalAmount.toLocaleString()}
                      </TableCell>

                      <TableCell>
                        <Chip
                          size="small"
                          label={
                            quotation.status
                          }
                          color={
                            quotation.status ===
                            "SELECTED"
                              ? "success"
                              : quotation.status ===
                                "REJECTED"
                              ? "error"
                              : "default"
                          }
                        />
                      </TableCell>

                      <TableCell align="center">
                        {quotation.status ===
                        "SUBMITTED" ? (
                          <Button
                            size="small"
                            variant="contained"
                            disabled={loading}
                            onClick={() =>
                              onSelect(
                                quotation.quotationId
                              )
                            }
                          >
                            Select
                          </Button>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack
          direction="row"
          justifyContent="flex-end"
          mt="auto"
        >
          <Button
            variant="outlined"
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default QuotationComparisonDrawer;