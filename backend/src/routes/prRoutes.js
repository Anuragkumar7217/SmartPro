const express = require("express");

const router = express.Router();

const prController = require("../controllers/prController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

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

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("EMPLOYEE"),
  prController.getPurchaseRequestById
);

module.exports = router;