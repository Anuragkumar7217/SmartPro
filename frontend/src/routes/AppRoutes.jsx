import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "../features/landing/pages/LandingPage";
import AuthModal from "../features/auth/components/AuthModal";

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
import RoleGuard from "./RoleGuard";
import { ROLES } from "../utils/roles";

import NotFound from "../components/common/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Landing & Dialogs */}
        <Route
          path="/"
          element={<LandingPage />}
        >
          <Route
            path="login"
            element={
              <PublicRoute>
                <AuthModal mode="login" />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute>
                <AuthModal mode="register" />
              </PublicRoute>
            }
          />
        </Route>

        {/* Protected */}

        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          {/* Employee Routes */}
          <Route element={<RoleGuard allowedRoles={[ROLES.EMPLOYEE]} />}>
            <Route
              path="/purchase-requests/create"
              element={<CreateRequestPage />}
            />
            <Route
              path="/purchase-requests/my"
              element={<MyRequestsPage />}
            />
          </Route>

          {/* Manager Routes */}
          <Route element={<RoleGuard allowedRoles={[ROLES.MANAGER]} />}>
            <Route
              path="/purchase-requests/pending"
              element={<PendingRequestsPage />}
            />
          </Route>

          {/* Purchase Team Routes */}
          <Route element={<RoleGuard allowedRoles={[ROLES.PURCHASE_TEAM]} />}>
            <Route
              path="/purchase-requests/approved"
              element={<ApprovedRequestsPage />}
            />
            <Route
              path="/vendors"
              element={<VendorsPage />}
            />
          </Route>

          {/* Shared Admin and Purchase Team Routes */}
          <Route element={<RoleGuard allowedRoles={[ROLES.ADMIN, ROLES.PURCHASE_TEAM]} />}>
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
          </Route>

          {/* Admin Routes */}
          <Route element={<RoleGuard allowedRoles={[ROLES.ADMIN]} />}>
            <Route
              path="/UserManagement"
              element={<UserManagementPage />}
            />
          </Route>
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