const express = require("express");
const cors = require('cors')

// Importing routers

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

const server = express()

// Server Use

server.use(express.json());
server.use(cors())
server.use(logger)


// Server use routers
server.use("/api/projects", projectRouter);


// logger middleware

function logger(){
    console.log(`${req.method} requested to '${req.url}' at ${Date.now()}`)
}

module.exports = server;