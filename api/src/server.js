const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js")
const server = express();

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())
server.use("/", routes)

module.exports = { server }
