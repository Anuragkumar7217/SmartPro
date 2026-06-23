const User = require("../models/User");

const getAllUsers = async () => {
  const users = await User.find()
    .select("-password")
    .sort({ createdAt: -1 });

  return users;
};

const updateUserRole = async (userId, role) => {
  const allowedRoles = [
    "ADMIN",
    "EMPLOYEE",
    "MANAGER",
    "PURCHASE_TEAM",
  ];

  if (!allowedRoles.includes(role)) {
    throw new Error("Invalid role");
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const activateUser = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isActive: true },
    { new: true }
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const deactivateUser = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isActive: false },
    { new: true }
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

module.exports = {
  getAllUsers,
  updateUserRole,
  activateUser,
  deactivateUser,
};