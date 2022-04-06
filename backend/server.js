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
// Import NodeJS module
const path = require("path");

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
/* app.get("/", (req, res) => {
  res.send("Api is running");
});
 */
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

app.use("/api/users", userRoutes);
// Route to GET all posts!!!!!!!!
app.use("/api/posts", postRoutes);

// Deployment
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend//build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.use(notFound);
app.use(errorHandler);

// Declare PORT variable
const PORT = process.env.port || 5000;
// Run server on port 5000
app.listen(PORT, () => {
  console.log(`NODE server running on port ${PORT}`);
});
