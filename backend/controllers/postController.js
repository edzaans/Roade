const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  // Find all posts
  const posts = await Post.find({ user: req.user._id });
  res.json(posts);
});

// Display all posts that were posted
const allPosts = asyncHandler(async (req, res) => {
  const displayAllPosts = await Post.find({ category: "Development" });
  res.json(displayAllPosts);
  console.log("Posts retreiving from DB");
});

// Create a new post
const createPost = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the fields");
    return;
  } else {
    const post = new Post({ user: req.user._id, title, content, category });

    const createdPost = await post.save();

    res.status(201).json(createdPost);
  }
});

// Get single post by ID
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found ..." });
  }
});

// Update post!!!!!!!!
const updatePost = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const post = await Post.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant edit this post...");
  }
  if (post) {
    post.title = title;
    post.content = content;
    post.category = category;
    const updatedPost = await post.save();
    res.json("Updated post : " + updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found...");
  }
});

// Delete post
const deletePost = asyncHandler(async (req, res) => {
  // Check if there are posts with ID
  const post = await Post.findById(req.params.id);
  // Check if post belongs to user who posted it!!!!!
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant edit this post...");
  }

  if (post) {
    await post.remove();
    res.json({ message: "Post sucessfully removed..." });
  } else {
    res.status(404);
    throw new Error("Post not found...");
  }
});

module.exports = {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  allPosts,
};
