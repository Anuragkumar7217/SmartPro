import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import QuotationRowDetails from "./QuotationRowDetails";

function QuotationComparisonTable({
  comparison = [],
  selectedQuotation,
  loading,
  onVendorClick,
  onSelect,
}) {

if (!comparison.length) {
    return (
      <TableContainer
        component={Paper}
        variant="outlined"
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                No quotations available.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
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
          {comparison.map(
            (quotation, index) => {
              const expanded =
                selectedQuotation?._id ===
                quotation.quotationId;

              return (
                <>
                  <TableRow
                    key={quotation.quotationId}
                    hover
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      onVendorClick(
                        quotation.quotationId
                      )
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
                          <KeyboardArrowUpIcon fontSize="small" />
                        ) : (
                          <KeyboardArrowDownIcon fontSize="small" />
                        )}

                        {
                          quotation.vendor
                        }
                      </Box>
                    </TableCell>

                    <TableCell>
                      {
                        quotation.quotationNumber
                      }
                    </TableCell>

                    <TableCell align="right">
                      ₹
                      {Number(
                        quotation.totalAmount
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </TableCell>

                    <TableCell align="center">
                      <Chip
                        size="small"
                        label={
                          quotation.status
                        }
                        color={
                          quotation.status ===
                          "SELECTED"
                            ? "success"
                            : "default"
                        }
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

                          onSelect(
                            quotation.quotationId
                          );
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
                        <QuotationRowDetails
                          quotation={
                            selectedQuotation
                          }
                        />
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default QuotationComparisonTable;