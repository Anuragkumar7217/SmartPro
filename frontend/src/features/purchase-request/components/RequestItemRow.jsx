import {
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";

import { Trash2 } from "lucide-react";

import TextInput from "../../auth/components/forms/TextInput";

function RequestItemRow({
  index,
  item,
  handleItemChange,
  removeItem,
  disableDelete,
}) {
  return (
    <TableRow>
      <TableCell
        width={60}
        align="center"
      >
        {index + 1}
      </TableCell>

      <TableCell>
        <TextInput
          label=""
          name="itemName"
          value={item.itemName}
          onChange={(e) =>
            handleItemChange(
              index,
              "itemName",
              e.target.value
            )
          }
        />
      </TableCell>

      <TableCell width={180}>
        <TextInput
          label=""
          name="quantity"
          type="number"
          value={item.quantity}
          onChange={(e) =>
            handleItemChange(
              index,
              "quantity",
              Number(e.target.value)
            )
          }
        />
      </TableCell>

      <TableCell
        width={80}
        align="center"
      >
        <IconButton
          color="error"
          disabled={disableDelete}
          onClick={() => removeItem(index)}
        >
          <Trash2 size={18} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default RequestItemRow;