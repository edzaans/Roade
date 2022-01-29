// Import Express framework
const express = require("express");
// Set app to run EXPRESS
const app = express();
// Add CORS
const cors = require("cors");
// Import DOTENV
const dotenv = require("dotenv");
// Add Mongo connection
const connectDB = require("./config/db");
// Import Routes from userRoutes
const userRoutes = require("./routes/userRoutes");

// Import test data
const posts = require("../frontend/src/data/posts");
// Import MIDDLEWARE from folder
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use(cors());
// Set up HEADERS to be used by CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// DOTENV config
dotenv.config();
connectDB();
// SUPER IMPORTANT!!!
app.use(express.json());

// Test API point
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get TEST posts with ID
/* app.get("/api/posts/:id", (req, res) => {
  //Filter POSTS array with params ID number
  const post = posts.find((n) => {
    return n._id === req.params.id;
  });
  res.send(post);
});
 */

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// Declare PORT variable
const PORT = process.env.port || 5000;
// Run server on port 5000
app.listen(PORT, () => {
  console.log(`NODE server running on port ${PORT}`);
});
