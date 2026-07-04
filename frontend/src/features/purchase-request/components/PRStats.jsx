import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCards from "../../../components/common/StatsCards";

function PRStats({
  requests,
}) {
  const stats = [
    {
      title: "Total Requests",
      value: requests.length,
      color: "#4F46E5",
      icon: <FileText size={26} />,
    },
    {
      title: "Submitted",
      value: requests.filter(
        (request) =>
          request.status === "SUBMITTED"
      ).length,
      color: "#ED6C02",
      icon: <Clock3 size={26} />,
    },
    {
      title: "Approved",
      value: requests.filter(
        (request) =>
          request.status === "APPROVED"
      ).length,
      color: "#16A34A",
      icon: <CheckCircle2 size={26} />,
    },
    {
      title: "Rejected",
      value: requests.filter(
        (request) =>
          request.status === "REJECTED"
      ).length,
      color: "#DC2626",
      icon: <XCircle size={26} />,
    },
  ];

  return <StatsCards stats={stats} />;
}

export default PRStats;