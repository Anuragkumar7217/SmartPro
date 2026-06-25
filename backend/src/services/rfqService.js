const RFQ = require("../models/RFQ");
const Counter = require("../models/Counter");
const PurchaseRequest = require("../models/PurchaseRequest");
const Vendor = require("../models/Vendor");

const generateRFQNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "rfq" },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true }
  );

  return `RFQ-${String(counter.sequence).padStart(5, "0")}`;
};

const createRFQ = async (data, userId) => {
  const { purchaseRequest, vendors, remarks } = data;

  const pr = await PurchaseRequest.findById(purchaseRequest);

  if (!pr) {
    throw new Error("Purchase Request not found");
  }

  if (pr.status !== "APPROVED") {
    throw new Error("RFQ can only be created for approved PR");
  }

  const vendorCount = await Vendor.countDocuments({
    _id: { $in: vendors },
  });

  if (vendorCount !== vendors.length) {
    throw new Error("One or more vendors not found");
  }

  const rfqNumber = await generateRFQNumber();

  const rfq = await RFQ.create({
    rfqNumber,
    purchaseRequest,
    vendors,
    remarks,
    createdBy: userId,
  });

  return rfq;
};

const getRFQs = async () => {
  return RFQ.find()
    .populate("purchaseRequest")
    .populate("vendors")
    .populate("createdBy", "-password")
    .sort({ createdAt: -1 });
};

const getRFQById = async (id) => {
  const rfq = await RFQ.findById(id)
    .populate("purchaseRequest")
    .populate("vendors")
    .populate("createdBy", "-password");

  if (!rfq) {
    throw new Error("RFQ not found");
  }

  return rfq;
};

const issueRFQ = async (id) => {
  const rfq = await RFQ.findById(id);

  if (!rfq) {
    throw new Error("RFQ not found");
  }

  if (rfq.status !== "DRAFT") {
    throw new Error("Only DRAFT RFQ can be issued");
  }

  rfq.status = "ISSUED";

  await rfq.save();

  return rfq;
};

const closeRFQ = async (id) => {
  const rfq = await RFQ.findById(id);

  if (!rfq) {
    throw new Error("RFQ not found");
  }

  if (rfq.status !== "ISSUED") {
    throw new Error("Only ISSUED RFQ can be closed");
  }

  rfq.status = "CLOSED";

  await rfq.save();

  return rfq;
};

module.exports = {
  createRFQ,
  getRFQs,
  getRFQById,
  issueRFQ,
  closeRFQ,
};