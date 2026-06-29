import { Chip } from "@mui/material";

const STATUS_CONFIG = {
  Draft: "default",
  Pending: "warning",
  Approved: "success",
  Rejected: "error",
  Cancelled: "default",
  Completed: "success",
};

function StatusChip({ status }) {
  return (
    <Chip
      label={status}
      color={STATUS_CONFIG[status] || "default"}
      size="small"
    />
  );
}

export default StatusChip;