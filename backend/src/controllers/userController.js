const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const user = await userService.updateUserRole(
      req.params.id,
      req.body.role
    );

    return res.status(200).json({
      success: true,
      message: "Role updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const activateUser = async (req, res) => {
  try {
    const user = await userService.activateUser(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "User activated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deactivateUser = async (req, res) => {
  try {
    const user = await userService.deactivateUser(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "User deactivated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  updateUserRole,
  activateUser,
  deactivateUser,
};