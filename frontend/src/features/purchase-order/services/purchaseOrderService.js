import api from "../../../services/api";

const purchaseOrderService = {
  // ===========================
  // Purchase Orders
  // ===========================

  async getPurchaseOrders() {
    const response = await api.get("/purchase-orders");
    return response.data.data;
  },

  async getPurchaseOrderById(id) {
    const response = await api.get(`/purchase-orders/${id}`);
    return response.data.data;
  },

  async createPurchaseOrder(data) {
    const response = await api.post(
      "/purchase-orders",
      data
    );

    return response.data;
  },

  async issuePurchaseOrder(id) {
    const response = await api.patch(
      `/purchase-orders/${id}/issue`
    );

    return response.data;
  },

  async cancelPurchaseOrder(id) {
    const response = await api.patch(
      `/purchase-orders/${id}/cancel`
    );

    return response.data;
  },

  // ===========================
  // Create Purchase Order Drawer
  // ===========================

  async getRFQs() {
    const response = await api.get("/rfqs");
    return response.data?.data || [];
  },

  async getQuotationComparison(rfqId) {
    const response = await api.get(
        `/quotations/rfq/${rfqId}/comparison`
    );
    return response.data?.data || {};
  },
};

export default purchaseOrderService;