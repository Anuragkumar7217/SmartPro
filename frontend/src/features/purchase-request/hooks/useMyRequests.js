import { useEffect, useMemo, useState } from "react";

import { purchaseRequestService } from "../services/purchaseRequestService";

function useMyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [viewLoading, setViewLoading] =
    useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const response =
        await purchaseRequestService.getMyRequests();

      setRequests(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load requests."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleViewRequest = async (id) => {
    try {
      setViewLoading(true);

      const response =
        await purchaseRequestService.getPurchaseRequestById(
          id
        );

      setSelectedRequest(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load request."
      );
    } finally {
      setViewLoading(false);
    }
  };

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesSearch =
        !search ||
        request.prNumber
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        request.title
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        !status || request.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [requests, search, status]);

  return {
    requests: filteredRequests,

    loading,
    error,

    search,
    setSearch,

    status,
    setStatus,

    selectedRequest,
    viewLoading,
    handleViewRequest,

    refresh: fetchRequests,
  };
}

export default useMyRequests;