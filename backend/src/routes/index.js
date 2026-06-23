const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

router.get("/", (req, res) => {
  res.send("SmartPro API Running");
});

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);

module.exports = router;