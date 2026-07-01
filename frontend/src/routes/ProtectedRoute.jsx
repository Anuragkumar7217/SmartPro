import { Navigate, Outlet } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import { useAuthStore } from "../store/authStore";

function ProtectedRoute() {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default ProtectedRoute;