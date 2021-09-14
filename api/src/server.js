const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js")
const server = express();

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())
server.use("/", routes)
server.use((err, res) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = { server }
