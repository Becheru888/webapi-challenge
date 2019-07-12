const express = require("express");


// Importing routers

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

const server = express()

// Server Use

server.use(express.json());
server.use(logger)



// logger middleware

function logger(){
    console.log(`${req.method} requested to ${req.url} at ${Date.now()}`)
}

module.exports = server;