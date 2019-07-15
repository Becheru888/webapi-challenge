const express = require("express");
const cors = require('cors')
const helmet = require('helmet')

// Importing routers

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

const server = express()

// Server Use

server.use(express.json());
server.use(cors())
server.use(helmet())
server.use(logger)


// Server use routers
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);


// logger middleware

function logger(req, res, next){
    console.log(`${req.method} requested to '${req.url}' at ${Date.now()}`)
    next()
}

module.exports = server;