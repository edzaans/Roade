const express = require("express");
// Import User modules
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route for register
router.route("/").post(registerUser);
// Route to user profile
router.route("/profile").post(protect, updateUserProfile);
// Route for login
router.post("/login", authUser);

module.exports = router;
