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

function RFQVendorTable({
  vendors = [],
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Vendors
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Company
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Contact
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {vendors.length > 0 ? (
              vendors.map((vendor) => (
                <TableRow key={vendor._id}>
                  <TableCell>
                    {vendor.companyName}
                  </TableCell>

                  <TableCell>
                    {vendor.contactPerson}
                  </TableCell>

                  <TableCell>
                    {vendor.email}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="center"
                >
                  No Vendors
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RFQVendorTable;