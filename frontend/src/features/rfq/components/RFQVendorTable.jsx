import {
  Card,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

function RFQVendorTable({ vendors = [] }) {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Assigned Vendors
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Company
                </TableCell>

                <TableCell>
                  Contact Person
                </TableCell>

                <TableCell>
                  Email
                </TableCell>

                <TableCell>
                  Phone
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

                    <TableCell>
                      {vendor.phone}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                  >
                    No vendors assigned.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default RFQVendorTable;