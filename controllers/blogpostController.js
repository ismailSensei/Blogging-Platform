const Blogpost = require('../models/Blogpost');

// @desc        Fetch all blogposts
//@route        GET /api/v1/blogposts
//@access       Public
exports.getBlogPosts = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all blog posts' });
};

// @desc        Create a blogpost
//@route        POST /api/v1/blogposts
//@access       Private/Admin
exports.createBlogPost = async (req, res, next) => {
  try {
    const blogpost = await Blogpost.create(req.body);
    res.status(201).json({ success: true, data: blogpost });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error.message}` });
  }
};

// @desc        Fetch a single blogpost
//@route        GET /api/v1/blogposts/:id
//@access       Public
exports.getBlogPostById = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show blog post ${req.params.id}` });
};

// @desc        Update a single blogpost
//@route        PUT /api/v1/blogposts/:id
//@access       Private/Admin
exports.updateBlogPost = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update blog post ${req.params.id}` });
};

// @desc        Delete a single blogpost
//@route        DELETE /api/v1/blogposts/:id
//@access       Private/Admin
exports.deleteBlogPost = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete blog post ${req.params.id}` });
};
