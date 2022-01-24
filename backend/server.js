// Import Express framework
const express = require("express");
// Import test data
const posts = require("./data/posts");
// Import DOTENV
const dotenv = require("dotenv");

// Express Object
const app = express();
// DOTENV config
dotenv.config();

// Test API point
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get posts with ID
app.get("/api/posts/:id", (req, res) => {
  //Filter POSTS array with params ID number
  const post = posts.find((n) => {
    return n._id === req.params.id;
  });
  res.send(post);
});

// Declare PORT variable
const PORT = process.env.port || 5000;
// Run server on port 5000
app.listen(PORT, () => {
  console.log(`NODE server running on port ${PORT}`);
});
