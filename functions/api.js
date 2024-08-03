const express = require("express");
const serverless = require('serverless-http');
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
// const router = require("./routes/routes");
const aboutRouter = require("../src/routes/aboutRouter");
// const blogRouter = require("./routes/blogRouter");
require("../src/db/mongoose");
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
// app.use("/api/v1/project", router);
// app.use("/api/v1/blog", blogRouter);

router.get('/', (req, res) => {
    res.send('Hello Mudit, Nice to meet you! ;)');
});

app.use("/.netlify/functions/api/v1/about", aboutRouter);
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
