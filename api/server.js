const express = require("express");
const middleware = require('./middlware/middleware');
const db = require("../data/dbConfig.js");

const projectRoutes = require('./routes/projectRoutes');

const server = express();
middleware(server);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "running" });
});

server.use("/api/projects", projectRoutes)

module.exports = server