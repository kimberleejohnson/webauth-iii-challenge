// Requiring my middleware and dependencies 
const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

// Requiring routers 
const authRouter = require('../auth/auth-router.js'); 
const userRouter = require('../users/users-router.js'); 

// Defining server
const server = express(); 

// Telling my server to use all my dependencies
server.use(helmet()); 
server.use(express.json()); 
server.use(cors()); 

// Using routers 
server.use('/api/auth', authRouter)
server.use('/api/users', userRouter); 
// PLACEHOLDER for using future routers 

server.get('/', (req, res) => {
    res.send("It's working!");
})

module.exports = server; 