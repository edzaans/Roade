const asyncHandler = require("express-async-handler");

// Import User module
const User = require("../models/userModel");

// Generates JWT token
const generateToken = require("../utils/generateToken");

// Register function
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, number, password, picture } = req.body;

  // Check if user exists in database, pass find param
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Create new user if not already registered
  const user = await User.create({ name, email, number, password, picture });
  // Check if registered
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      number: user.number,

      picture: user.picture,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

// ****************************************************************//

// Login function
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if user is registered and FIND
  const user = await User.findOne({ email });

  // Ceck if USER nd if password is crrect,display returned data

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      number: user.number,

      picture: user.picture,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// Controller for user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.number = req.body.number || user.number;
    user.picture = req.body.picture || user.picture;

    // Check if password is coming back from database
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      number: updatedUser.number,
      email: updatedUser.email,
      picture: updatedUser.picture,
      token: generateToken(updatedUser._id),
    });
  } else {
    // Throw error if user is not found
    res.status(404);
    throw new Error("User not found !!!");
  }
});

module.exports = { registerUser, authUser, updateUserProfile };
