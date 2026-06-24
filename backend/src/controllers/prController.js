const prService = require("../services/prService");

const createPurchaseRequest = async (req, res) => {
  try {
    const purchaseRequest =
      await prService.createPurchaseRequest(
        req.body,
        req.user.id
      );

    res.status(201).json({
      success: true,
      message: "Purchase Request created successfully",
      data: purchaseRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyPurchaseRequests = async (req, res) => {
  try {
    const purchaseRequests =
      await prService.getMyPurchaseRequests(
        req.user.id
      );

    res.status(200).json({
      success: true,
      data: purchaseRequests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPurchaseRequestById = async (req, res) => {
  try {
    const purchaseRequest =
      await prService.getPurchaseRequestById(
        req.params.id,
        req.user.id
      );

    if (!purchaseRequest) {
      return res.status(404).json({
        success: false,
        message: "Purchase Request not found",
      });
    }

    res.status(200).json({
      success: true,
      data: purchaseRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPendingPurchaseRequests = async (
  req,
  res
) => {
  try {
    const purchaseRequests =
      await prService.getPendingPurchaseRequests();

    res.status(200).json({
      success: true,
      data: purchaseRequests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const approvePurchaseRequest = async (
  req,
  res
) => {
  try {
    const purchaseRequest =
      await prService.approvePurchaseRequest(
        req.params.id,
        req.user.id,
        req.body.managerComment
      );

    res.status(200).json({
      success: true,
      message:
        "Purchase Request approved successfully",
      data: purchaseRequest,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const rejectPurchaseRequest = async (
  req,
  res
) => {
  try {
    const purchaseRequest =
      await prService.rejectPurchaseRequest(
        req.params.id,
        req.user.id,
        req.body.managerComment
      );

    res.status(200).json({
      success: true,
      message:
        "Purchase Request rejected successfully",
      data: purchaseRequest,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPurchaseRequest,
  getMyPurchaseRequests,
  getPurchaseRequestById,
  getPendingPurchaseRequests,
  approvePurchaseRequest,
  rejectPurchaseRequest,
};