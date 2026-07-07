import { useState } from "react";

import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";

function QuotationRFQTable({
  rfqs = [],
  selectedRFQ,
  onSelect,
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 6;

  const tableData = rfqs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (!rfqs.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
        >
          No Closed RFQs Found
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          No RFQs are available for quotation comparison.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
        >
          RFQs
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                RFQ
              </TableCell>

              <TableCell>
                PR
              </TableCell>

              <TableCell align="center">
                Action
              </TableCell>

              <TableCell align="center">
                Quotations
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((rfq) => {
              const quotationCount =
                rfq.quotationCount ?? 0;

              const vendorCount =
                rfq.vendors?.length ?? 0;

              return (
                <TableRow
                  hover
                  key={rfq._id}
                  selected={
                    selectedRFQ?._id ===
                    rfq._id
                  }
                  onClick={() =>
                    onSelect(rfq)
                  }
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <TableCell>
                    <Chip
                      size="small"
                      color="primary"
                      variant="outlined"
                      label={rfq.rfqNumber}
                    />
                  </TableCell>

                  <TableCell>
  {rfq.purchaseRequest?.prNumber ? (
    <Chip
      size="small"
      color="primary"
      variant="outlined"
      label={rfq.purchaseRequest.prNumber}
    />
  ) : (
    "-"
  )}
</TableCell>

                  <TableCell align="center">
                    <StatusChip
                      status={
                        rfq.actionStatus === "COMPLETED"
                          ? "COMPLETED"
                          : "PENDING"
                      }
                    />
                  </TableCell>

                  <TableCell align="center">
                    {quotationCount} / {vendorCount}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[6]}
        count={rfqs.length}
        page={page}
        onPageChange={(_, page) =>
          setPage(page)
        }
      />
    </Paper>
  );
}

export default QuotationRFQTable;