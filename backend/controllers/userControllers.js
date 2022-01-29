const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// Register function
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;

  // Check if user exists in database, pass find param
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Create new user if not already registered
  const user = await User.create({ name, email, password, picture });
  // Check if registered
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

// Login function
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Ceck if USER nd if password is crrect

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, authUser };
