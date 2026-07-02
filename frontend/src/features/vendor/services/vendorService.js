import api from "../../../services/api";

const vendorService = {
  async getVendors() {
    const response = await api.get("/vendors");
    return response.data;
  },

  async createVendor(vendorData) {
    const response = await api.post(
      "/vendors",
      vendorData
    );

    return response.data;
  },
};

export default vendorService;