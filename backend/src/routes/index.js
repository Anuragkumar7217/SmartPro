const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");

router.get("/", (req, res) => {
  res.send("SmartPro API Running");
});

router.use("/api/auth", authRoutes);

module.exports = router;