import { useEffect, useMemo, useState } from "react";

import { dashboardService } from "../services/dashboardService";

function useDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const response =
        await dashboardService.getMyDashboardData();

      setRequests(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo(() => {
    return {
      total: requests.length,

      submitted: requests.filter(
        (request) => request.status === "SUBMITTED"
      ).length,

      approved: requests.filter(
        (request) => request.status === "APPROVED"
      ).length,

      rejected: requests.filter(
        (request) => request.status === "REJECTED"
      ).length,
    };
  }, [requests]);

  const recentRequests = useMemo(() => {
    return [...requests]
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [requests]);

  return {
    loading,
    error,

    requests,
    stats,
    recentRequests,

    refresh: fetchDashboardData,
  };
}

export default useDashboard;