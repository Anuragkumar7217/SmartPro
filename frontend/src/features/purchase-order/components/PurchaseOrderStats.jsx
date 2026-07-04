import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCards from "../../../components/common/StatsCards";

function PurchaseOrderStats({
  purchaseOrders,
}) {
  const stats = [
    {
      title: "Total Orders",
      value: purchaseOrders.length,
      color: "#4F46E5",
      icon: <FileText size={26} />,
    },
    {
      title: "Draft",
      value: purchaseOrders.filter(
        (purchaseOrder) =>
          purchaseOrder.status === "DRAFT"
      ).length,
      color: "#ED6C02",
      icon: <Clock3 size={26} />,
    },
    {
      title: "Issued",
      value: purchaseOrders.filter(
        (purchaseOrder) =>
          purchaseOrder.status === "ISSUED"
      ).length,
      color: "#16A34A",
      icon: <CheckCircle2 size={26} />,
    },
    {
      title: "Cancelled",
      value: purchaseOrders.filter(
        (purchaseOrder) =>
          purchaseOrder.status === "CANCELLED"
      ).length,
      color: "#DC2626",
      icon: <XCircle size={26} />,
    },
  ];

  return <StatsCards stats={stats} />;
}

export default PurchaseOrderStats;