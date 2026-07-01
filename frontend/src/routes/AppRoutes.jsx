import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";

import CreateRequestPage from "../features/purchase-request/pages/CreateRequestPage";
import MyRequestsPage from "../features/purchase-request/pages/MyRequestsPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import NotFound from "../components/common/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* Public */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        {/* Protected */}

        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/purchase-requests/create"
            element={<CreateRequestPage />}
          />

          <Route
            path="/purchase-requests/my"
            element={<MyRequestsPage />}
          />
        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;