const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const prRoutes = require("./prRoutes");
const vendorRoutes = require("./vendorRoutes");
const rfqRoutes = require("./rfqRoutes");
const quotationRoutes = require("./quotationRoutes");
const purchaseOrderRoutes = require("./purchaseOrderRoutes");

router.get("/", (req, res) => {
  res.send("SmartPro API Running");
});

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/pr", prRoutes);
router.use("/api/vendors", vendorRoutes);
router.use("/api/rfqs", rfqRoutes);
router.use("/api/quotations", quotationRoutes);
router.use("/api/purchase-orders", purchaseOrderRoutes);

module.exports = router;