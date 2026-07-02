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

function VendorTable({
  vendors = [],
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 5;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const tableData = vendors.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (!vendors.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 5,
          textAlign: "center",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
        >
          No Vendors Found
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          No vendors have been registered yet.
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
          variant="h5"
          fontWeight={700}
        >
          Vendors List
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Vendor Code
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Company
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Contact Person
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Email
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Phone
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Address
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Created By
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Created On
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((vendor) => (
              <TableRow
                hover
                key={vendor._id}
              >
                <TableCell>
                  <Chip
                    label={vendor.vendorCode}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Typography fontWeight={600}>
                    {vendor.companyName}
                  </Typography>
                </TableCell>

                <TableCell>
                  {vendor.contactPerson}
                </TableCell>

                <TableCell>
                  {vendor.email}
                </TableCell>

                <TableCell>
                  {vendor.phone}
                </TableCell>

                <TableCell>
                  {vendor.address}
                </TableCell>

                <TableCell>
                  <Box>
                    <Typography fontWeight={500}>
                      {vendor.createdBy?.firstName}{" "}
                      {vendor.createdBy?.lastName}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {vendor.createdBy?.email}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography>
                    {new Date(
                      vendor.createdAt
                    ).toLocaleDateString()}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {new Date(
                      vendor.createdAt
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={vendors.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
        labelRowsPerPage=""
      />
    </Paper>
  );
}

export default VendorTable;