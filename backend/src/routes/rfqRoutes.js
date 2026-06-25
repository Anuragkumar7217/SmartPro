const express = require("express");

const router = express.Router();

const rfqController = require("../controllers/rfqController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware("PURCHASE_TEAM"),
  rfqController.createRFQ
);

router.get(
  "/",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  rfqController.getRFQs
);

router.get(
  "/:id",
  roleMiddleware("PURCHASE_TEAM", "ADMIN"),
  rfqController.getRFQById
);

router.patch(
  "/:id/issue",
  roleMiddleware("PURCHASE_TEAM"),
  rfqController.issueRFQ
);

router.patch(
  "/:id/close",
  roleMiddleware("PURCHASE_TEAM"),
  rfqController.closeRFQ
);

module.exports = router;