require('dotenv').config();
const mongoose = require('mongoose');
const {DB_PASSWORD, DB_HOST, DB_NAME, DB_USER} = process.env;
const {server} = require("./src/server");

const app = require('http').createServer(server)

const io = require('socket.io')(app, {cors:{origin: "*"}})

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then((data)=>{
    app.listen("3001", () => console.log("Listen in port 3001."));
    console.log("Conexión exitosa a DB " + data.connections[0].name);
})
.catch(err => console.error(err))

