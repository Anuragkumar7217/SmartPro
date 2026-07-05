import { useEffect, useMemo, useState } from "react";

import purchaseOrderService from "../../purchase-order/services/purchaseOrderService";
import rfqService from "../../rfq/services/rfqService";

function usePurchaseTeamDashboard() {
  const [loading, setLoading] = useState(true);

  const [rfqs, setRFQs] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const [rfqResponse, poResponse] =
        await Promise.all([
          rfqService.getRFQs(),
          purchaseOrderService.getPurchaseOrders(),
        ]);

      setRFQs(rfqResponse.data || []);
      setPurchaseOrders(poResponse || []);
    } finally {
      setLoading(false);
    }
  }

  const stats = useMemo(() => {
    return {
      totalRFQs: rfqs.length,

      closedRFQs: rfqs.filter(
        (rfq) => rfq.status === "CLOSED"
      ).length,

      draftPurchaseOrders:
        purchaseOrders.filter(
          (po) => po.status === "DRAFT"
        ).length,

      issuedPurchaseOrders:
        purchaseOrders.filter(
          (po) => po.status === "ISSUED"
        ).length,
    };
  }, [rfqs, purchaseOrders]);

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
console.log(purchaseOrders);
  return {
    loading,
    stats,
    summary,
    recentRFQs,
    recentPurchaseOrders,
  };
}

export default usePurchaseTeamDashboard;