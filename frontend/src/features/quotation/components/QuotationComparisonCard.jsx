import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Collapse,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function QuotationComparisonCard({
  comparison = [],
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

        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>

                <TableCell>Vendor</TableCell>

                <TableCell>
                  Quotation
                </TableCell>

                <TableCell align="right">
                  Amount
                </TableCell>

                <TableCell align="center">
                  Status
                </TableCell>

                <TableCell align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {comparison.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                  >
                    No quotations available.
                  </TableCell>
                </TableRow>
              ) : (
                comparison.map((quotation, index) => {
                const expanded =
                    selectedQuotation?._id === quotation._id;

                return (
                    <>
                    <TableRow
                        key={quotation._id}
                        hover
                        sx={{
                        cursor: "pointer",
                        }}
                        onClick={() =>
                        onVendorClick(quotation._id)
                        }
                    >
                        <TableCell>
                        {index + 1}
                        </TableCell>

                        <TableCell>
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            {expanded ? (
                            <KeyboardArrowUpIcon
                                fontSize="small"
                            />
                            ) : (
                            <KeyboardArrowDownIcon
                                fontSize="small"
                            />
                            )}

                            {quotation.vendor?.companyName}
                        </Box>
                        </TableCell>

                        <TableCell>
                        {quotation.quotationNumber}
                        </TableCell>

                        <TableCell align="right">
                        ₹
                        {Number(
                            quotation.totalAmount
                        ).toLocaleString()}
                        </TableCell>

                        <TableCell align="center">
                        <Chip
                            label={quotation.status}
                            color={
                            quotation.status ===
                            "SELECTED"
                                ? "success"
                                : "default"
                            }
                            size="small"
                        />
                        </TableCell>

                        <TableCell align="center">
                        <Button
                            size="small"
                            variant="contained"
                            disabled={
                            loading ||
                            quotation.status ===
                                "SELECTED"
                            }
                            onClick={(e) => {
                            e.stopPropagation();

                            onSelect(quotation._id);
                            }}
                        >
                            {loading ? (
                            <CircularProgress
                                size={18}
                            />
                            ) : quotation.status ===
                            "SELECTED" ? (
                            "Selected"
                            ) : (
                            "Select"
                            )}
                        </Button>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell
                        colSpan={6}
                        sx={{
                            p: 0,
                            border: 0,
                        }}
                        >
                        <Collapse
                            in={expanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <Box
                            sx={{
                                p: 3,
                                bgcolor:
                                "background.default",
                            }}
                            >
                            {selectedQuotation && (
                                <>
                                <Typography
                                    fontWeight={700}
                                    mb={2}
                                >
                                    Item Details
                                </Typography>

                                <Table
                                    size="small"
                                    sx={{
                                    mb: 3,
                                    }}
                                >
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>
                                        Item
                                        </TableCell>

                                        <TableCell>
                                        Qty
                                        </TableCell>

                                        <TableCell>
                                        Unit Price
                                        </TableCell>

                                        <TableCell>
                                        Total
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>

                                    <TableBody>
                                    {selectedQuotation.items?.map(
                                        (item) => (
                                        <TableRow
                                            key={
                                            item._id
                                            }
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

                                            <TableCell>
                                            ₹
                                            {item.unitPrice.toLocaleString()}
                                            </TableCell>

                                            <TableCell>
                                            ₹
                                            {(
                                                item.quantity *
                                                item.unitPrice
                                            ).toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                        )
                                    )}
                                    </TableBody>
                                </Table>

                                <Typography
                                    variant="subtitle2"
                                >
                                    Remarks
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                >
                                    {selectedQuotation.remarks ||
                                    "-"}
                                </Typography>
                                </>
                            )}
                            </Box>
                        </Collapse>
                        </TableCell>
                    </TableRow>
                    </>
                );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default QuotationComparisonCard;