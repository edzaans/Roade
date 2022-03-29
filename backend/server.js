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
// Import Mongo Model
const PostModel = require("./../backend/models/postModel");
// Import Routes from userRoutes
const userRoutes = require("./routes/userRoutes");
// Import Routes from noteRoutes
const postRoutes = require("./routes/postRoutes");
// Import test data
const testPosts = require("../frontend/src/data/testPosts");
// Import MIDDLEWARE from folder
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const router = require("./routes/postRoutes");

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

// GET ALL POSTS!!!!!!!!
app.get("/connection", async (req, res) => {
  PostModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.send(result);
    console.log(result);
  });
});

// Test API point
app.get("/", (req, res) => {
  res.send("Api is running");
});

/* app.use("/connection", (req, res) => {
  console.log("Test");
}); */

/* app.use("/testPosts", (req, res) => {
  res.send("Testing is live");
  console.log("Youre in");
}); */

/* app.use("api/testPosts", postRoutes); */

app.use("/api/users", userRoutes);
// Route to GET all posts!!!!!!!!
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

// Declare PORT variable
const PORT = process.env.port || 5000;
// Run server on port 5000
app.listen(PORT, () => {
  console.log(`NODE server running on port ${PORT}`);
});
