const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  writtenDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;
