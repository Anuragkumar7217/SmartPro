const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const prRoutes = require("./prRoutes");

router.get("/", (req, res) => {
  res.send("SmartPro API Running");
});

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/pr", prRoutes);

module.exports = router;