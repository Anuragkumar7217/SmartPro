const express = require("express");

const router = express.Router();

const quotationController = require("../controllers/quotationController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware("PURCHASE_TEAM"),
  quotationController.createQuotation
);

router.get(
  "/rfq/:rfqId",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  quotationController.getQuotationsByRFQ
);

router.get(
  "/:id",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  quotationController.getQuotationById
);

module.exports = router;