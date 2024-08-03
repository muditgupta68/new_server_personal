const express = require('express');
const { getProjects, addProjects } = require('../controller/projectController');
const projectRouter = express.Router();

// projects
projectRouter.get('/', getProjects);
projectRouter.post('/new', addProjects);

module.exports = projectRouter;