const Vendor = require("../models/Vendor");
const Counter = require("../models/Counter");

const generateVendorCode = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "VENDOR" },
    { $inc: { sequence: 1 } },
    {
      new: true,
      upsert: true,
    }
  );

  return `VEN-${String(counter.sequence).padStart(
    5,
    "0"
  )}`;
};

const createVendor = async (
  vendorData,
  userId
) => {
  const vendorCode =
    await generateVendorCode();

  const vendor = await Vendor.create({
    ...vendorData,
    vendorCode,
    createdBy: userId,
  });

  return vendor;
};

const getAllVendors = async () => {
  return Vendor.find()
    .populate(
      "createdBy",
      "firstName lastName email"
    )
    .sort({ createdAt: -1 });
};

module.exports = {
  createVendor,
  getAllVendors,
};