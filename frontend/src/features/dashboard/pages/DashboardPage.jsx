import { useMemo } from "react";

import { useAuthStore } from "../../../store/authStore";
import { ROLES } from "../../../utils/roles";

import EmployeeDashboard from "./EmployeeDashboard";
import ManagerDashboard from "./ManagerDashboard";

function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const dashboard = useMemo(() => {
    switch (user?.role) {
      case ROLES.EMPLOYEE:
        return <EmployeeDashboard />;

      case ROLES.MANAGER:
        return <ManagerDashboard />;

      // Future Modules
      // case ROLES.PURCHASE_TEAM:
      //   return <PurchaseDashboard />;

      // case ROLES.ADMIN:
      //   return <AdminDashboard />;

      default:
        return <EmployeeDashboard />;
    }
  }, [user]);

  return dashboard;
}

export default DashboardPage;