const express = require("express");
const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  allPosts,
} = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/read").get(allPosts);
// GET request all routes
router.route("/").get(protect, getPosts);
// Create POST (takes Logged in users ID+adds to New Post)
router.route("/create").post(protect, createPost);
//UPDATE / DELETE route
router
  .route("/:id")
  .get(getPostById)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
