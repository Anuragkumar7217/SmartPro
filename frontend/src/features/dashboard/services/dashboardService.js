import api from "../../../services/api";

export const dashboardService = {
  getMyDashboardData: async () => {
    const response = await api.get("/pr/my");
    return response.data;
  },
};