const vendorService = require("../services/vendorService");

const createVendor = async (req, res) => {
  try {
    const vendor = await vendorService.createVendor(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      message: "Vendor created successfully",
      data: vendor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllVendors = async (req, res) => {
  try {
    const vendors =
      await vendorService.getAllVendors();

    res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createVendor,
  getAllVendors,
};