import api from "../../../services/api";

const quotationService = {
  async getRFQs() {
    const response = await api.get("/rfqs");

    return response.data;
  },

  async getRFQById(rfqId) {
    const response = await api.get(`/rfqs/${rfqId}`);

    return response.data;
  },

  async createQuotation(data) {
    const response = await api.post("/quotations", data);

    return response.data;
  },

  async getQuotationsByRFQ(rfqId) {
    const response = await api.get(`/quotations/rfq/${rfqId}`);

    return response.data;
  },

  async getQuotationById(quotationId) {
    const response = await api.get(`/quotations/${quotationId}`);

    return response.data;
  },

  async getComparison(rfqId) {
    const response = await api.get(
      `/quotations/rfq/${rfqId}/comparison`
    );

    return response.data;
  },

  async selectQuotation(quotationId) {
    const response = await api.patch(
      `/quotations/${quotationId}/select`
    );

    return response.data;
  },
};

export default quotationService;



// import api from "../../../services/api";

// const quotationService = {
//   async getRFQs() {
//     const response = await api.get("/rfqs");

//     return response.data;
//   },

//   async createQuotation(data) {
//     const response = await api.post(
//       "/quotations",
//       data
//     );

//     return response.data;
//   },

//   async getQuotationsByRFQ(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}`
//     );

//     return response.data;
//   },

//   async getQuotationById(quotationId) {
//     const response = await api.get(
//       `/quotations/${quotationId}`
//     );

//     return response.data;
//   },

//   async getComparison(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}/comparison`
//     );

//     return response.data;
//   },

//   async selectQuotation(quotationId) {
//     const response = await api.patch(
//       `/quotations/${quotationId}/select`
//     );

//     return response.data;
//   },
// };

// export default quotationService;


//2
// import api from "../../../services/api";

// const quotationService = {
//   async getClosedRFQs() {
//     const response = await api.get("/rfqs");

//     return response.data;
//   },

//   async getRFQById(rfqId) {
//     const response = await api.get(`/rfqs/${rfqId}`);

//     return response.data;
//   },

//   async getQuotationsByRFQ(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}`
//     );

//     return response.data;
//   },

//   async getComparison(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}/comparison`
//     );

//     return response.data;
//   },

//   async getQuotationById(quotationId) {
//     const response = await api.get(
//       `/quotations/${quotationId}`
//     );

//     return response.data;
//   },

//   async selectQuotation(quotationId) {
//     const response = await api.patch(
//       `/quotations/${quotationId}/select`
//     );

//     return response.data;
//   },
// };

// export default quotationService;


//3
// import api from "../../../services/api";

// const quotationService = {
//   async getRFQs() {
//     const response = await api.get("/rfqs");

//     return response.data;
//   },

//   async getClosedRFQs() {
//     const response = await api.get("/rfqs");

//     return response.data;
//   },

//   async getRFQById(rfqId) {
//     const response = await api.get(`/rfqs/${rfqId}`);

//     return response.data;
//   },

//   async createQuotation(data) {
//     const response = await api.post(
//       "/quotations",
//       data
//     );

//     return response.data;
//   },

//   async getQuotationsByRFQ(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}`
//     );

//     return response.data;
//   },

//   async getComparison(rfqId) {
//     const response = await api.get(
//       `/quotations/rfq/${rfqId}/comparison`
//     );

//     return response.data;
//   },

//   async getQuotationById(quotationId) {
//     const response = await api.get(
//       `/quotations/${quotationId}`
//     );

//     return response.data;
//   },

//   async selectQuotation(quotationId) {
//     const response = await api.patch(
//       `/quotations/${quotationId}/select`
//     );

//     return response.data;
//   },
// };

// export default quotationService;