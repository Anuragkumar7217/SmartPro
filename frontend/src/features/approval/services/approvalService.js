import api from "../../../services/api";

const approvalService = {
  async getPendingRequests() {
    const response = await api.get("/pr/pending");
    return response.data;
  },

  async approveRequest(requestId, managerComment) {
    const response = await api.patch(`/pr/${requestId}/approve`, {
      managerComment,
    });

    return response.data;
  },

  async rejectRequest(requestId, managerComment) {
    const response = await api.patch(`/pr/${requestId}/reject`, {
      managerComment,
    });

    return response.data;
  },
};

export default approvalService;