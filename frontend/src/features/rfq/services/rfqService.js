import api from "../../../services/api";

const rfqService = {
  async getApprovedPurchaseRequests() {
    const response = await api.get("/pr/approved");
    return response.data;
  },

  async getVendors() {
    const response = await api.get("/vendors");
    return response.data;
  },

  async createRFQ(data) {
    const response = await api.post("/rfqs", data);
    return response.data;
  },

  async getRFQs() {
    const response = await api.get("/rfqs");
    return response.data;
  },

  async getRFQById(id) {
    const response = await api.get(`/rfqs/${id}`);
    return response.data;
  },

  async issueRFQ(id) {
    const response = await api.patch(
      `/rfqs/${id}/issue`
    );

    return response.data;
  },

  async closeRFQ(id) {
    const response = await api.patch(
      `/rfqs/${id}/close`
    );

    return response.data;
  },
};

export default rfqService;