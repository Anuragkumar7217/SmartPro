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

function UserTable({
  users = [],
  selectedUser,
  onSelect,
}) {
  const [page, setPage] = useState(0);

  const rowsPerPage = 5;

  const handleChangePage = (
    _,
    newPage
  ) => {
    setPage(newPage);
  };

  const tableData = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (!users.length) {
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
          No Users Found
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          No users match the selected filters.
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
          Users
        </Typography>
      </Box>

      <TableContainer sx={{ overflowX: "hidden", }} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                }}
                >
                Name
              </TableCell>

              <TableCell
                align="center"
                sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                }}
                >
                Email
              </TableCell>

              <TableCell
                align="center"
                sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                }}
                >
                Role
              </TableCell>

              <TableCell
                align="center"
                sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                }}
                >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((user) => {
              const isSelected =
                selectedUser?._id ===
                user._id;

              return (
                <TableRow
                  hover
                  key={user._id}
                  selected={isSelected}
                  onClick={() =>
                    onSelect(user)
                  }
                  sx={{
                    cursor: "pointer",

                    "&.Mui-selected": {
                      bgcolor:
                        "rgba(99,102,241,.08)",

                      "&:hover": {
                        bgcolor:
                          "rgba(99,102,241,.12)",
                      },
                    },
                  }}
                >
                  <TableCell align="center">
                    <Typography
                        fontWeight={600}
                        noWrap
                        sx={{
                        maxWidth: 90,
                        mx: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        }}
                    >
                        {user.firstName} {user.lastName}
                    </Typography>
                    </TableCell>

                    <TableCell align="center">
                    <Typography
                        noWrap
                        sx={{
                        maxWidth: 110,
                        mx: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        }}
                    >
                        {user.email}
                    </Typography>
                    </TableCell>

                  <TableCell align="center">
                    <Chip
                        label={user.role.replaceAll("_", " ")}
                        color="primary"
                        variant="outlined"
                        size="small"
                    />
                    </TableCell>

                  <TableCell align="center">
                    <Chip
                        label={user.isActive ? "Active" : "Inactive"}
                        color={user.isActive ? "success" : "error"}
                        size="small"
                    />
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
        labelRowsPerPage=""
      />
    </Paper>
  );
}

export default UserTable;