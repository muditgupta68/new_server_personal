const express = require("express");
const { addAbout, getAbout } = require("../controller/aboutController");
const aboutRouter = express.Router();

// About
aboutRouter.get("/", getAbout);
aboutRouter.post("/new", addAbout);

module.exports = aboutRouter;