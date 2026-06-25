const Quotation = require("../models/Quotation");
const RFQ = require("../models/RFQ");
const Vendor = require("../models/Vendor");
const Counter = require("../models/Counter");

const generateQuotationNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "quotation" },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true }
  );

  return `QT-${String(counter.sequence).padStart(5, "0")}`;
};

const createQuotation = async (data, userId) => {
  const { rfq, vendor, items, remarks } = data;

  const rfqDoc = await RFQ.findById(rfq);

  if (!rfqDoc) {
    throw new Error("RFQ not found");
  }

  if (rfqDoc.status !== "ISSUED") {
    throw new Error("Quotation can only be added to ISSUED RFQ");
  }

  const vendorDoc = await Vendor.findById(vendor);

  if (!vendorDoc) {
    throw new Error("Vendor not found");
  }

  const vendorExistsInRFQ = rfqDoc.vendors.some(
    (vendorId) => vendorId.toString() === vendor
  );

  if (!vendorExistsInRFQ) {
    throw new Error("Vendor is not assigned to this RFQ");
  }

  const existingQuotation = await Quotation.findOne({
    rfq,
    vendor,
  });

  if (existingQuotation) {
    throw new Error(
      "Vendor has already submitted quotation for this RFQ"
    );
  }

  let totalAmount = 0;

  const quotationItems = items.map((item) => {
    const totalPrice = item.quantity * item.unitPrice;

    totalAmount += totalPrice;

    return {
      itemName: item.itemName,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice,
    };
  });

  const quotationNumber = await generateQuotationNumber();

  const quotation = await Quotation.create({
    quotationNumber,
    rfq,
    vendor,
    items: quotationItems,
    totalAmount,
    remarks,
    createdBy: userId,
  });

  return quotation;
};

const getQuotationsByRFQ = async (rfqId) => {
  return Quotation.find({ rfq: rfqId })
    .populate("vendor")
    .populate("createdBy", "-password")
    .sort({ totalAmount: 1 });
};

const getQuotationById = async (id) => {
  const quotation = await Quotation.findById(id)
    .populate("rfq")
    .populate("vendor")
    .populate("createdBy", "-password");

  if (!quotation) {
    throw new Error("Quotation not found");
  }

  return quotation;
};

const getQuotationComparison = async (rfqId) => {
  const rfq = await RFQ.findById(rfqId);

  if (!rfq) {
    throw new Error("RFQ not found");
  }

  if (rfq.status === "DRAFT") {
    throw new Error(
      "Comparison is available only for ISSUED or CLOSED RFQs"
    );
  }

  const quotations = await Quotation.find({
    rfq: rfqId,
  })
    .populate("vendor")
    .sort({ totalAmount: 1 });

  const rankedQuotations = quotations.map(
    (quotation, index) => ({
      rank: index + 1,
      quotationId: quotation._id,
      quotationNumber: quotation.quotationNumber,
      vendor: quotation.vendor.companyName,
      totalAmount: quotation.totalAmount,
      status: quotation.status,
    })
  );

  return {
    rfqId: rfq._id,
    rfqNumber: rfq.rfqNumber,
    quotations: rankedQuotations,
  };
};

module.exports = {
  createQuotation,
  getQuotationsByRFQ,
  getQuotationById,
  getQuotationComparison,
};