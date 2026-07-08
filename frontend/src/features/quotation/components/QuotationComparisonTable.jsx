import { useState } from "react";

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

import StatusChip from "../../../components/common/StatusChip";
import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

import QuotationRowDetails from "./QuotationRowDetails";

function QuotationComparisonTable({
  comparison = [],
  selectedQuotation,
  loading,
  onVendorClick,
  onSelect,
}) {
  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [quotationId, setQuotationId] =
    useState(null);

  const handleOpenDialog = (id) => {
    setQuotationId(id);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    onSelect(quotationId);
    setDialogOpen(false);
    setQuotationId(null);
  };

  const handleCloseDialog = () => {
    if (loading) return;

    setDialogOpen(false);
    setQuotationId(null);
  };

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
    <>
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
                Amount (₹)
              </TableCell>

              <TableCell align="center">
                Decision
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
                      key={
                        quotation.quotationId
                      }
                      hover
                      sx={{
                        cursor: "pointer",
                        transition:
                          "background-color .2s",

                        "&:hover": {
                          backgroundColor:
                            "#F8FAFC",
                        },
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
                          {quotation.vendor}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Chip
                          size="small"
                          color="primary"
                          variant="outlined"
                          label={
                            quotation.quotationNumber
                          }
                        />
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
                        {quotation.status ===
                        "SUBMITTED" ? (
                          <Button
                            size="small"
                            variant="contained"
                            color="warning"
                            disabled={loading}
                            onClick={(e) => {
                              e.stopPropagation();

                              handleOpenDialog(
                                quotation.quotationId
                              );
                            }}
                            sx={{
                              minWidth: 96,
                              fontWeight: 600,
                              textTransform:
                                "none",
                              borderRadius: 2,
                            }}
                          >
                            {loading ? (
                              <CircularProgress
                                size={18}
                                color="inherit"
                              />
                            ) : (
                              "Select"
                            )}
                          </Button>
                        ) : quotation.status ===
                          "SELECTED" ? (
                          <StatusChip status="SELECTED" />
                        ) : (
                          <StatusChip status="REJECTED" />
                        )}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        colSpan={5}
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

      <ConfirmationDialog
        open={dialogOpen}
        loading={loading}
        title="Select Vendor"
        message="Are you sure you want to select this quotation? All other quotations for this RFQ will be marked as rejected."
        confirmText="Select Vendor"
        cancelText="Cancel"
        confirmColor="warning"
        onConfirm={handleConfirm}
        onClose={handleCloseDialog}
      />
    </>
  );
}

export default QuotationComparisonTable;