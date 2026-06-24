const express = require("express");

const router = express.Router();

const prController = require("../controllers/prController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Employee Routes

router.post(
  "/",
  authMiddleware,
  roleMiddleware("EMPLOYEE"),
  prController.createPurchaseRequest
);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("EMPLOYEE"),
  prController.getMyPurchaseRequests
);

// Manager Routes

router.get(
  "/pending",
  authMiddleware,
  roleMiddleware("MANAGER"),
  prController.getPendingPurchaseRequests
);

router.patch(
  "/:id/approve",
  authMiddleware,
  roleMiddleware("MANAGER"),
  prController.approvePurchaseRequest
);

router.patch(
  "/:id/reject",
  authMiddleware,
  roleMiddleware("MANAGER"),
  prController.rejectPurchaseRequest
);

// Generic Routes

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("EMPLOYEE"),
  prController.getPurchaseRequestById
);

module.exports = router;