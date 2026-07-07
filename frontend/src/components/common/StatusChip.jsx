import { Chip } from "@mui/material";

const STATUS_CONFIG = {
  // Purchase Request
  SUBMITTED: {
    label: "Submitted",
    color: "warning",
  },
  APPROVED: {
    label: "Approved",
    color: "success",
  },
  REJECTED: {
    label: "Rejected",
    color: "error",
  },

  // RFQ & Purchase Order
  DRAFT: {
    label: "Draft",
    color: "default",
  },
  ISSUED: {
    label: "Issued",
    color: "info",
  },
  CLOSED: {
    label: "Closed",
    color: "success",
  },
  CANCELLED: {
    label: "Cancelled",
    color: "error",
  },

  // Quotation
  SELECTED: {
    label: "Selected",
    color: "success",
  },
  PENDING: {
    label: "Pending",
    color: "warning",
  },
  COMPLETED: {
    label: "Completed",
    color: "success",
  },

  // User
  ACTIVE: {
    label: "ACTIVE",
    color: "success",
  },

  INACTIVE: {
    label: "INACTIVE",
    color: "error",
  },
};

function StatusChip({ status = "" }) {
  const key = String(status).trim().toUpperCase();

  const config = STATUS_CONFIG[key] || {
    label: status,
    color: "default",
  };

  return (
    <Chip
      size="small"
      label={config.label}
      color={config.color}
      variant="filled"
      sx={{
        minWidth: 96,
        fontWeight: 600,
        borderRadius: 2,
        textTransform: "none",
      }}
    />
  );
}

export default StatusChip;