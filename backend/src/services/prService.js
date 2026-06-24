const PurchaseRequest = require("../models/PurchaseRequest");
const Counter = require("../models/Counter");

const generatePRNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "PR" },
    { $inc: { sequence: 1 } },
    {
      new: true,
      upsert: true,
    }
  );

  return `PR-${String(counter.sequence).padStart(5, "0")}`;
};

const createPurchaseRequest = async (data, userId) => {
  const prNumber = await generatePRNumber();

  const purchaseRequest = await PurchaseRequest.create({
    ...data,
    prNumber,
    createdBy: userId,
  });

  return purchaseRequest;
};

const getMyPurchaseRequests = async (userId) => {
  return PurchaseRequest.find({
    createdBy: userId,
  })
    .sort({ createdAt: -1 });
};

const getPurchaseRequestById = async (
  prId,
  userId
) => {
  return PurchaseRequest.findOne({
    _id: prId,
    createdBy: userId,
  })
    .populate("createdBy", "firstName lastName email")
    .populate("approvedBy", "firstName lastName email");
};

module.exports = {
  createPurchaseRequest,
  getMyPurchaseRequests,
  getPurchaseRequestById,
};