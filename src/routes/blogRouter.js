const express = require("express");
const { getBlog, addBlog } = require("../controller/blogController");
const blogRouter = express.Router();

// About
blogRouter.get("/", getBlog);
blogRouter.post("/new", addBlog);

module.exports = blogRouter;