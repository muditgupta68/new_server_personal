const BlogModel = require("../models/blogSchema");

exports.addBlog = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({ err: "Data is invalid" });
    }
    const newBlog = await new BlogModel(data);
    await newBlog.save();
    res.status(200).json({ msg: "SUCCESS ~ Blog Data" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
exports.getBlog = async (req, res) => {
  try {
    // pagination
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 6;
    }

    const limit = parseInt(size);
    page = parseInt(page);

    const data = await BlogModel.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const countData = await BlogModel.countDocuments();

    res.status(200).json({
        projects: data,
        curr: page,
        totalPages: Math.ceil(countData / limit),
      });

  } catch (error) {
    res.status(400).json({ err: error });
  }
};
