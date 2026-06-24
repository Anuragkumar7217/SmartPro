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

const getPendingPurchaseRequests = async () => {
  return PurchaseRequest.find({
    status: "SUBMITTED",
  })
    .populate(
      "createdBy",
      "firstName lastName email"
    )
    .sort({ createdAt: -1 });
};

const getApprovedPurchaseRequests =
  async () => {
    return PurchaseRequest.find({
      status: "APPROVED",
    })
      .populate(
        "createdBy",
        "firstName lastName email"
      )
      .populate(
        "approvedBy",
        "firstName lastName email"
      )
      .sort({ createdAt: -1 });
  };

const approvePurchaseRequest = async (
  prId,
  managerId,
  managerComment
) => {
  const purchaseRequest =
    await PurchaseRequest.findById(prId);

  if (!purchaseRequest) {
    throw new Error(
      "Purchase Request not found"
    );
  }

  if (purchaseRequest.status !== "SUBMITTED") {
    throw new Error(
      "Only submitted requests can be approved"
    );
  }

  purchaseRequest.status = "APPROVED";

  purchaseRequest.approvedBy = managerId;

  purchaseRequest.managerComment =
    managerComment || "";

  await purchaseRequest.save();

  return purchaseRequest;
};

const rejectPurchaseRequest = async (
  prId,
  managerId,
  managerComment
) => {
  const purchaseRequest =
    await PurchaseRequest.findById(prId);

  if (!purchaseRequest) {
    throw new Error(
      "Purchase Request not found"
    );
  }

  if (purchaseRequest.status !== "SUBMITTED") {
    throw new Error(
      "Only submitted requests can be rejected"
    );
  }

  purchaseRequest.status = "REJECTED";

  purchaseRequest.approvedBy = managerId;

  purchaseRequest.managerComment =
    managerComment || "";

  await purchaseRequest.save();

  return purchaseRequest;
};

module.exports = {
  createPurchaseRequest,
  getMyPurchaseRequests,
  getPurchaseRequestById,
  getPendingPurchaseRequests,
  getApprovedPurchaseRequests,
  approvePurchaseRequest,
  rejectPurchaseRequest,
};