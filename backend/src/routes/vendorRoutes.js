const express = require("express");

const router = express.Router();

const vendorController = require(
  "../controllers/vendorController"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("PURCHASE_TEAM"),
  vendorController.createVendor
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("PURCHASE_TEAM"),
  vendorController.getAllVendors
);

module.exports = router;