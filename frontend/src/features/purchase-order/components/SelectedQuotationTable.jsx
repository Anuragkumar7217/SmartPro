import { useState } from "react";

import {
  Button,
  Card,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import ConfirmationDialog from "../../../components/common/ConfirmationDialog";

function SelectedQuotationTable({
  quotations = [],
  loading = false,
  creatingQuotationId = null,
  onCreate,
}) {
  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [selectedQuotationId, setSelectedQuotationId] =
    useState(null);

  const handleOpenDialog = (quotationId) => {
    setSelectedQuotationId(quotationId);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    onCreate(selectedQuotationId);
    setDialogOpen(false);
    setSelectedQuotationId(null);
  };

  const handleCloseDialog = () => {
    if (creatingQuotationId) return;

    setDialogOpen(false);
    setSelectedQuotationId(null);
  };

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
    <>
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
                      No selected quotations
                      available.
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
                      <Chip
                        size="small"
                        color="primary"
                        variant="outlined"
                        label={quotation.rfqNumber}
                      />
                    </TableCell>

                    <TableCell>
                      {quotation.prNumber ? (
                        <Chip
                          size="small"
                          color="primary"
                          variant="outlined"
                          label={quotation.prNumber}
                        />
                      ) : (
                        "-"
                      )}
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
                          handleOpenDialog(
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

      <ConfirmationDialog
        open={dialogOpen}
        loading={Boolean(creatingQuotationId)}
        title="Create Purchase Order"
        message="Are you sure you want to create a Purchase Order from this selected quotation?"
        confirmText="Create PO"
        cancelText="Cancel"
        onConfirm={handleConfirm}
        onClose={handleCloseDialog}
      />
    </>
  );
}

export default SelectedQuotationTable;