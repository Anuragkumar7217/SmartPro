const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { OAuth2Client } = require("google-auth-library");

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

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

const googleLoginUser = async (idToken) => {
  if (!idToken) {
    throw new Error("Google token is required");
  }

  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const {
    sub,
    email,
    given_name,
    family_name,
    picture,
  } = payload;

  let user = await User.findOne({
    email: email.toLowerCase(),
  });

  // Existing user
  if (user) {
    // Link existing LOCAL account with Google
    if (!user.googleId) {
      user.googleId = sub;
      user.authProvider = "GOOGLE";
      user.profilePicture = picture || "";
      await user.save();
    }
  } else {
    // First Google login
    user = await User.create({
      firstName: given_name || "",
      lastName: family_name || "",
      email: email.toLowerCase(),
      password: null,
      googleId: sub,
      authProvider: "GOOGLE",
      profilePicture: picture || "",
      role: "EMPLOYEE",
    });
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
      profilePicture: user.profilePicture,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
  googleLoginUser,
};