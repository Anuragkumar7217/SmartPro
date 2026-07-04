import { Chip } from "@mui/material";

const STATUS_CONFIG = {
  // Purchase Order & RFQ
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
    color: "default",
  },

  // Purchase Request & Quotation
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

  // Quotation
  SELECTED: {
    label: "Selected",
    color: "success",
  },
};

function StatusChip({ status = "" }) {
  const key = String(status).toUpperCase();

  const config = STATUS_CONFIG[key] || {
    label: status,
    color: "default",
  };

  return (
    <Chip
      size="small"
      label={config.label}
      color={config.color}
      sx={{
        minWidth: 90,
        fontWeight: 600,
      }}
    />
  );
}

export default StatusChip;


// import { Chip } from "@mui/material";

// const STATUS_CONFIG = {
//   Draft: "default",
//   Pending: "warning",
//   Approved: "success",
//   Rejected: "error",
//   Cancelled: "default",
//   Completed: "success",
// };

// function StatusChip({ status }) {
//   return (
//     <Chip
//       label={status}
//       color={STATUS_CONFIG[status] || "default"}
//       size="small"
//     />
//   );
// }

// export default StatusChip;