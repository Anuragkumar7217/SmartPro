import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Forbidden from "../components/common/Forbidden";

function RoleGuard({ allowedRoles }) {
  const user = useAuthStore((state) => state.user);

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Forbidden />;
  }

  return <Outlet />;
}

export default RoleGuard;
