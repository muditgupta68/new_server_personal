const AboutModel = require("../models/About");

exports.addAbout = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({ err: "Data is invalid" });
    }
    const newAbout = await new AboutModel(data);
    await newAbout.save();
    res.status(200).json({ msg: "SUCCESS ~ About Data" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
exports.getAbout = async (req, res) => {
  try {
    const data = await AboutModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
