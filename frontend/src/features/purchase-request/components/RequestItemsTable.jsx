import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import RequestItemRow from "./RequestItemRow";

function RequestItemsTable({
  items,
  handleItemChange,
  addItem,
  removeItem,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mt: 3,
        borderRadius: 3,
        border: "1px solid #E5E7EB",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "#4b43e2",
        }}
      >
        Items
      </Typography>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={60}>#</TableCell>

            <TableCell>
              Item Name
            </TableCell>

            <TableCell width={180}>
              Quantity
            </TableCell>

            <TableCell width={80}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item, index) => (
            <RequestItemRow
              key={index}
              index={index}
              item={item}
              handleItemChange={
                handleItemChange
              }
              removeItem={removeItem}
              disableDelete={
                items.length === 1
              }
            />
          ))}
        </TableBody>
      </Table>
            
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={addItem}
        sx={{
          mt: 3,
          background: "linear-gradient(135deg,#4F46E5,#6366F1)",
          "&:hover": {
            background: "linear-gradient(135deg,#4338CA,#4F46E5)",
          },
        }}
      >
        Add Item
      </Button>
    </Paper>
  );
}

export default RequestItemsTable;