const express = require("express");

const router = express.Router();

const purchaseOrderController = require(
  "../controllers/purchaseOrderController"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const roleMiddleware = require(
  "../middleware/roleMiddleware"
);

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  purchaseOrderController.createPurchaseOrder
);

router.get(
  "/",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  purchaseOrderController.getAllPurchaseOrders
);

router.get(
  "/:id",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  purchaseOrderController.getPurchaseOrderById
);

router.patch(
  "/:id/issue",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  purchaseOrderController.issuePurchaseOrder
);

router.patch(
  "/:id/cancel",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  purchaseOrderController.cancelPurchaseOrder
);

module.exports = router;