// Requiring my middleware and dependencies 
const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

// PLACEHOLDER for future routers

// Defining server
const server = express(); 

// Telling my server to use all my dependencies
server.use(helmet()); 
server.use(express.json()); 
server.use(cors()); 

// PLACEHOLDER for using future routers 

server.get('/', (req, res) => {
    res.send("It's working!");
})

module.exports = server; 