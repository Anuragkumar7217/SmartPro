const PurchaseOrder = require("../models/PurchaseOrder");
const Quotation = require("../models/Quotation");
const RFQ = require("../models/RFQ");
const Counter = require("../models/Counter");

const generatePONumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "purchaseOrder" },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true }
  );

  return `PO-${String(counter.sequence).padStart(5, "0")}`;
};

const createPurchaseOrder = async (
  quotationId,
  userId
) => {
  const quotation = await Quotation.findById(
    quotationId
  )
    .populate("vendor")
    .populate("rfq");

  if (!quotation) {
    throw new Error("Quotation not found");
  }

  if (quotation.status !== "SELECTED") {
    throw new Error(
      "Purchase Order can only be created from selected quotation"
    );
  }

  const existingPO =
    await PurchaseOrder.findOne({
      quotation: quotationId,
    });

  if (existingPO) {
    throw new Error(
      "Purchase Order already exists for this quotation"
    );
  }

  const rfq = await RFQ.findById(quotation.rfq);

  if (!rfq) {
    throw new Error("RFQ not found");
  }

  const poNumber = await generatePONumber();

  const purchaseOrder =
    await PurchaseOrder.create({
      poNumber,
      quotation: quotation._id,
      rfq: rfq._id,
      purchaseRequest: rfq.purchaseRequest,
      vendor: quotation.vendor._id,
      items: quotation.items,
      totalAmount: quotation.totalAmount,
      createdBy: userId,
    });

  return purchaseOrder;
};

const getAllPurchaseOrders = async () => {
  return PurchaseOrder.find()
    .populate("vendor")
    .populate("quotation")
    .sort({ createdAt: -1 });
};

const getPurchaseOrderById = async (id) => {
  const purchaseOrder =
    await PurchaseOrder.findById(id)
      .populate("vendor")
      .populate("quotation")
      .populate("rfq")
      .populate("purchaseRequest")
      .populate("createdBy", "-password");

  if (!purchaseOrder) {
    throw new Error(
      "Purchase Order not found"
    );
  }

  return purchaseOrder;
};

const issuePurchaseOrder = async (id) => {
  const purchaseOrder =
    await PurchaseOrder.findById(id);

  if (!purchaseOrder) {
    throw new Error(
      "Purchase Order not found"
    );
  }

  if (purchaseOrder.status !== "DRAFT") {
    throw new Error(
      "Only DRAFT Purchase Orders can be issued"
    );
  }

  purchaseOrder.status = "ISSUED";

  await purchaseOrder.save();

  return purchaseOrder;
};

const cancelPurchaseOrder = async (id) => {
  const purchaseOrder =
    await PurchaseOrder.findById(id);

  if (!purchaseOrder) {
    throw new Error(
      "Purchase Order not found"
    );
  }

  if (purchaseOrder.status === "CANCELLED") {
    throw new Error(
      "Purchase Order is already cancelled"
    );
  }

  purchaseOrder.status = "CANCELLED";

  await purchaseOrder.save();

  return purchaseOrder;
};

module.exports = {
  createPurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrderById,
  issuePurchaseOrder,
  cancelPurchaseOrder,
};