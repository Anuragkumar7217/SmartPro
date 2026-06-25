const purchaseOrderService = require(
  "../services/purchaseOrderService"
);

const createPurchaseOrder = async (
  req,
  res
) => {
  try {
    const purchaseOrder =
      await purchaseOrderService.createPurchaseOrder(
        req.body.quotationId,
        req.user.id
      );

    res.status(201).json({
      success: true,
      data: purchaseOrder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllPurchaseOrders = async (
  req,
  res
) => {
  try {
    const purchaseOrders =
      await purchaseOrderService.getAllPurchaseOrders();

    res.json({
      success: true,
      data: purchaseOrders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getPurchaseOrderById = async (
  req,
  res
) => {
  try {
    const purchaseOrder =
      await purchaseOrderService.getPurchaseOrderById(
        req.params.id
      );

    res.json({
      success: true,
      data: purchaseOrder,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const issuePurchaseOrder = async (
  req,
  res
) => {
  try {
    const purchaseOrder =
      await purchaseOrderService.issuePurchaseOrder(
        req.params.id
      );

    res.json({
      success: true,
      data: purchaseOrder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const cancelPurchaseOrder = async (
  req,
  res
) => {
  try {
    const purchaseOrder =
      await purchaseOrderService.cancelPurchaseOrder(
        req.params.id
      );

    res.json({
      success: true,
      data: purchaseOrder,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrderById,
  issuePurchaseOrder,
  cancelPurchaseOrder,
};