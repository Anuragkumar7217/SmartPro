import { useCallback, useEffect, useMemo, useState } from "react";

import purchaseOrderService from "../services/purchaseOrderService";

import useSnackbar from "../../../hooks/useSnackbar";

function usePurchaseOrders() {
  const {
    snackbar,
    showSuccess,
    showError,
    closeSnackbar,
  } = useSnackbar();

  const [purchaseOrders, setPurchaseOrders] =
    useState([]);

  const [selectedPurchaseOrder, setSelectedPurchaseOrder] =
    useState(null);

  const [selectedQuotations, setSelectedQuotations] =
    useState([]);

  const [search, setSearch] = useState("");

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [detailLoading, setDetailLoading] =
    useState(false);

  const [actionLoading, setActionLoading] =
    useState(false);

  const [creatingQuotationId, setCreatingQuotationId] =
    useState(null);

  //-------------------------------------------------
  // Load Purchase Orders
  //-------------------------------------------------

  const loadPurchaseOrders = useCallback(async () => {
    try {
      setLoading(true);

      const data =
        await purchaseOrderService.getPurchaseOrders();

      setPurchaseOrders(data);
    } catch (error) {
      showError(
        error.response?.data?.message ||
        "Failed to load Purchase Orders."
      );
    } finally {
      setLoading(false);
    }
  }, [showError]);

  //   -------------------------------------------------
  //   Load Selected Quotations
  //   -------------------------------------------------

  const loadSelectedQuotations =
    useCallback(async () => {
      try {
        const rfqs =
          await purchaseOrderService.getRFQs();

        const closedRFQs = rfqs.filter(
          (rfq) =>
            rfq.status === "CLOSED" &&
            (rfq.vendors?.length ?? 0) > 0
        );

        // const closedRFQs = useMemo(() => {
        //     return rfqs.filter(
        //     (rfq) =>
        //         rfq.status === "CLOSED" &&
        //         rfq.quotationCount > 0 &&
        //         (rfq.vendors?.length || 0) > 0
        //     );
        // }, [rfqs]);


        const comparisons = await Promise.all(
          closedRFQs.map(async (rfq) => ({
            rfq,
            comparison:
              await purchaseOrderService.getQuotationComparison(
                rfq._id
              ),
          }))
        );

        const selected = [];

        for (const { rfq, comparison } of comparisons) {
          console.log("RFQ:", rfq._id);
          console.log("Comparison:", comparison);
          const safeComparison = comparison?.quotations || [];

          const quotation = safeComparison.find(
            (item) => item.status === "SELECTED"
          );

          if (!quotation) {
            continue;
          }

          const alreadyCreated =
            purchaseOrders.some((po) => {
              return (
                po.quotation?._id === quotation.quotationId ||
                po.quotation === quotation.quotationId
              );
            });

          if (alreadyCreated) {
            continue;
          }

          selected.push({
            rfqId: rfq._id,

            rfqNumber: rfq.rfqNumber,

            prNumber:
              rfq.purchaseRequest?.prNumber,

            quotationId:
              quotation.quotationId,

            quotationNumber:
              quotation.quotationNumber,

            vendor: quotation.vendor,

            amount:
              quotation.totalAmount,

            quotationStatus:
              quotation.status,
          });
        }

        setSelectedQuotations(selected);
      } catch (error) {
        console.error("FULL ERROR:", error);
        console.error("STACK:", error?.stack);
        console.error("RESPONSE:", error?.response);
        showError(
          error.response?.data?.message ||
          "Failed to load selected quotations."
        );
      }
    }, [purchaseOrders, showError]);

  //-------------------------------------------------
  // Load Detail
  //-------------------------------------------------

  const loadPurchaseOrder =
    useCallback(async (id) => {
      try {
        setDetailLoading(true);

        const data =
          await purchaseOrderService.getPurchaseOrderById(
            id
          );

        setSelectedPurchaseOrder(data);
      } catch (error) {
        showError(
          error.response?.data?.message ||
          "Failed to load Purchase Order."
        );
      } finally {
        setDetailLoading(false);
      }
    }, [showError]);

  //-------------------------------------------------
  // Create PO
  //-------------------------------------------------

  const createPurchaseOrder =
    useCallback(
      async (quotationId) => {
        try {
          setCreatingQuotationId(
            quotationId
          );

          const result =
            await purchaseOrderService.createPurchaseOrder(
              {
                quotationId,
              }
            );

          showSuccess(
            result.message ||
            "Purchase Order Created Successfully."
          );

          setDrawerOpen(false);

          await loadPurchaseOrders();
        } catch (error) {
          showError(
            error.response?.data?.message ||
            "Failed to create Purchase Order."
          );
        } finally {
          setCreatingQuotationId(
            null
          );
        }
      },
      [
        loadPurchaseOrders,
        showError,
        showSuccess,
      ]
    );

  //-------------------------------------------------
  // Issue PO
  //-------------------------------------------------

  const issuePurchaseOrder =
    useCallback(async () => {
      if (!selectedPurchaseOrder) return;

      try {
        setActionLoading(true);

        const result =
          await purchaseOrderService.issuePurchaseOrder(
            selectedPurchaseOrder._id
          );

        showSuccess(result.message || "Purchase Order Issued Successfully.");

        await Promise.all([
          loadPurchaseOrders(),
          loadPurchaseOrder(
            selectedPurchaseOrder._id
          ),
        ]);
      } catch (error) {
        showError(
          error.response?.data?.message ||
          "Failed to issue Purchase Order."
        );
      } finally {
        setActionLoading(false);
      }
    }, [
      selectedPurchaseOrder,
      loadPurchaseOrders,
      loadPurchaseOrder,
      showSuccess,
      showError,
    ]);

  //-------------------------------------------------
  // Cancel PO
  //-------------------------------------------------

  const cancelPurchaseOrder =
    useCallback(async () => {
      if (!selectedPurchaseOrder) return;

      try {
        setActionLoading(true);

        const result =
          await purchaseOrderService.cancelPurchaseOrder(
            selectedPurchaseOrder._id
          );

        showSuccess(result.message || "Purchase Order Cancelled Successfully.");

        await Promise.all([
          loadPurchaseOrders(),
          loadPurchaseOrder(
            selectedPurchaseOrder._id
          ),
        ]);
      } catch (error) {
        showError(
          error.response?.data?.message ||
          "Failed to cancel Purchase Order."
        );
      } finally {
        setActionLoading(false);
      }
    }, [
      selectedPurchaseOrder,
      loadPurchaseOrders,
      loadPurchaseOrder,
      showSuccess,
      showError,
    ]);

  //-------------------------------------------------
  // Search
  //-------------------------------------------------

  const filteredPurchaseOrders =
    useMemo(() => {
      const keyword =
        search.toLowerCase();

      return purchaseOrders.filter(
        (po) =>
          po.poNumber
            ?.toLowerCase()
            .includes(keyword) ||
          po.status
            ?.toLowerCase()
            .includes(keyword) ||
          po.vendor?.companyName
            ?.toLowerCase()
            .includes(keyword)
      );
    }, [purchaseOrders, search]);

  //-------------------------------------------------
  // Initial Load
  //-------------------------------------------------

  useEffect(() => {
    loadPurchaseOrders();
  }, [loadPurchaseOrders]);

  useEffect(() => {
    if (!loading) {
      loadSelectedQuotations();
    }
  }, [
    loading,
    loadSelectedQuotations,
  ]);

  //-------------------------------------------------

  return {
    snackbar,
    closeSnackbar,

    loading,
    detailLoading,
    actionLoading,

    purchaseOrders:
      filteredPurchaseOrders,

    selectedPurchaseOrder,

    selectedQuotations,

    search,
    setSearch,

    drawerOpen,
    setDrawerOpen,

    creatingQuotationId,

    loadPurchaseOrder,

    createPurchaseOrder,

    issuePurchaseOrder,

    cancelPurchaseOrder,
  };
}

export default usePurchaseOrders;