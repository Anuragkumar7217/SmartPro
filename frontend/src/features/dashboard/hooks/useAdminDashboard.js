import { useEffect, useMemo, useState } from "react";

import userService from "../../user/services/userService";
import rfqService from "../../rfq/services/rfqService";
import purchaseOrderService from "../../purchase-order/services/purchaseOrderService";

function useAdminDashboard() {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  const [rfqs, setRFQs] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const [
        usersResponse,
        rfqResponse,
        purchaseOrderResponse,
      ] = await Promise.all([
        userService.getAllUsers(),
        rfqService.getRFQs(),
        purchaseOrderService.getPurchaseOrders(),
      ]);

      setUsers(usersResponse || []);
      setRFQs(rfqResponse.data || []);
      setPurchaseOrders(purchaseOrderResponse || []);
    } catch (error) {
      console.error("Failed to load admin dashboard", error);
    } finally {
      setLoading(false);
    }
  }

  const stats = useMemo(() => {
    return {
      totalUsers: users.length,

      activeUsers: users.filter(
        (user) => user.isActive
      ).length,

      totalRFQs: rfqs.length,

      totalPurchaseOrders:
        purchaseOrders.length,
    };
  }, [users, rfqs, purchaseOrders]);

  const summary = useMemo(() => {
    return {
      rfqs: {
        draft: rfqs.filter(
          (rfq) => rfq.status === "DRAFT"
        ).length,

        issued: rfqs.filter(
          (rfq) => rfq.status === "ISSUED"
        ).length,

        closed: rfqs.filter(
          (rfq) => rfq.status === "CLOSED"
        ).length,
      },

      purchaseOrders: {
        draft: purchaseOrders.filter(
          (po) => po.status === "DRAFT"
        ).length,

        issued: purchaseOrders.filter(
          (po) => po.status === "ISSUED"
        ).length,

        cancelled: purchaseOrders.filter(
          (po) => po.status === "CANCELLED"
        ).length,
      },
    };
  }, [rfqs, purchaseOrders]);

  const pendingActions = useMemo(() => {
    return {
      draftPurchaseOrders:
        purchaseOrders.filter(
          (po) => po.status === "DRAFT"
        ).length,

      inactiveUsers: users.filter(
        (user) => !user.isActive
      ).length,
    };
  }, [purchaseOrders, users]);

  const recentRFQs = useMemo(() => {
    return [...rfqs]
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [rfqs]);

  const recentPurchaseOrders =
    useMemo(() => {
      return [...purchaseOrders]
        .sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        )
        .slice(0, 5);
    }, [purchaseOrders]);

  return {
    loading,

    stats,

    summary,

    pendingActions,

    recentRFQs,

    recentPurchaseOrders,
  };
}

export default useAdminDashboard;