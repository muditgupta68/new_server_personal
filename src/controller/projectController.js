const ProjectModel = require("../models/projectSchema");

exports.getProjects = async (req, res) => {
  try {
    // pagination
    let { page, size, search } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 6;
    }

    const limit = parseInt(size);
    page = parseInt(page);

    // search
    let searchQuery = {};
    if (search) {
      searchQuery = { tag: search.split("%") };
    }

    const data = await ProjectModel.find(searchQuery)
      .limit(limit)
      .skip((page - 1) * limit);

    const countData = await ProjectModel.countDocuments();

    const countTotal = await ProjectModel.find(searchQuery);

    res.status(200).json({
      projects: data,
      curr: page,
      totalValues: countTotal.length,
      totalPages: Math.ceil(countData / limit),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addProjects = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({ err: "Data is invalid" });
    }
    const newReactProject = await new ProjectModel(data);
    await newReactProject.save();
    res.status(200).json({ msg: "SUCCESS" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
