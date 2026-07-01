import api from "../../../services/api";

export const purchaseRequestService = {
  createPurchaseRequest: async (requestData) => {
    const response = await api.post("/pr", requestData);
    return response.data;
  },

  getMyRequests: async () => {
    const response = await api.get("/pr/my");
    return response.data;
  },

  getPurchaseRequestById: async (id) => {
    const response = await api.get(`/pr/${id}`);
    return response.data;
  },
};