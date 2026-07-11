import { useMemo } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import getCustomTheme from "../theme/theme";
import { useThemeStore } from "../store/themeStore";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";

import CreateRequestPage from "../features/purchase-request/pages/CreateRequestPage";
import MyRequestsPage from "../features/purchase-request/pages/MyRequestsPage";

import PendingRequestsPage from "../features/approval/pages/PendingRequestsPage";

import ApprovedRequestsPage from "../features/rfq/pages/ApprovedRequestsPage";
import RFQManagementPage from "../features/rfq/pages/RFQManagementPage";

import VendorsPage from "../features/vendor/pages/VendorsPage";
import QuotationManagementPage from "../features/quotation/pages/QuotationManagementPage";
import PurchaseOrderPage from "../features/purchase-order/pages/PurchaseOrderPage";

import UserManagementPage from "../features/user/pages/UserManagementPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import NotFound from "../components/common/NotFound";

function ThemeWrapper({ children }) {
  const location = useLocation();
  const mode = useThemeStore((state) => state.mode);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const activeMode = isAuthPage ? "light" : mode;

  const theme = useMemo(() => getCustomTheme(activeMode), [activeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeWrapper>
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

            <Route
              path="/purchase-requests/pending"
              element={<PendingRequestsPage />}
            />

            <Route
              path="/purchase-requests/approved"
              element={<ApprovedRequestsPage />}
            />

            <Route
              path="/vendors"
              element={<VendorsPage />}
            />

            <Route
              path="/rfqs"
              element={<RFQManagementPage />}
            />

            <Route
              path="/quotations"
              element={<QuotationManagementPage />}
            />

            <Route
              path="/purchase-orders"
              element={<PurchaseOrderPage />}
            />

            <Route
              path="/UserManagement"
              element={<UserManagementPage />}
            />
          </Route>

          {/* 404 */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </ThemeWrapper>
    </BrowserRouter>
  );
}

export default AppRoutes;