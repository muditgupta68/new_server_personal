const express = require("express");
const cors = require("cors");
const serverless = require('serverless-http');
const app = express();
const origin = "https://muditgupta-fc351.web.app"
const origin1 = "http://localhost:3000"
require("dotenv").config();
app.use(cors({
    origin: origin,
    methods:["GET","POST"]
}));
const bodyParser = require('body-parser');
const aboutRouter = require("../src/routes/aboutRouter");
const projectRouter = require("../src/routes/projectRouter");
const blogRouter = require("../src/routes/blogRouter");
require("../src/db/mongoose");
const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('Hello Mudit, Nice to meet you! ;)');
});

app.use("/.netlify/functions/api/v1/blog", blogRouter);
app.use("/.netlify/functions/api/v1/project", projectRouter);
app.use("/.netlify/functions/api/v1/about", aboutRouter);
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
