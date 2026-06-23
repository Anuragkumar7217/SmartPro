const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  updateUserRole,
  activateUser,
  deactivateUser,
} = require("../controllers/userController");

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAllUsers
);

router.patch(
  "/:id/role",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateUserRole
);

router.patch(
  "/:id/activate",
  authMiddleware,
  roleMiddleware("ADMIN"),
  activateUser
);

router.patch(
  "/:id/deactivate",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deactivateUser
);

module.exports = router;