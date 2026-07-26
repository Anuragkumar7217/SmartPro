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
    </BrowserRouter>
  );
}

export default AppRoutes;