const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (userData) => {
  const { firstName, lastName, email, password } = userData;
  const normalizedEmail = email.toLowerCase().trim();

  // Check required fields
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }

  // Check if email already exists
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email: normalizedEmail,
    password: hashedPassword,
  });

  return {
    id: user._id,
    email: user.email,
    role: user.role,
  };
};

const loginUser = async (loginData) => {
  const { email, password } = loginData;
  const normalizedEmail = email.toLowerCase().trim();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email: normalizedEmail }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }

  if (!user.isActive) {
    throw new Error("Account is deactivated");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
};