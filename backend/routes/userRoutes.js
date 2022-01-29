const express = require("express");
// Import User modules
const { authUser, registerUser } = require("../controllers/userControllers");

const router = express.Router();

// Route for register
router.route("/").post(registerUser);
// Route for login
router.post("/login", authUser);

module.exports = router;
