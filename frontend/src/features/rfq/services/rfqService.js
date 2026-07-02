import api from "../../../services/api";

const rfqService = {
  async getApprovedPurchaseRequests() {
    const response = await api.get("/pr/approved");
    return response.data;
  },
};

export default rfqService;