// This middleware will restrict who can see certain pages 

// Require jwt library so we can verify token
const jwt = require('jsonwebtoken'); 

// Require secrets so secrets can also be decoded 
const secrets = require('../config/secrets.js'); 

module.exports = (req, res, next) => {
    // defining the token 
    const token = req.headers.authorization; 

    // Check if there is a token 
    if (token) {
       // Verify method verifies token, decodes secret, and also pass in a function
       jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
           if(err) {
               // Invalid token
               res.status(401).json({ message: 'Invalid token.'});
           } else {
               // Valid token 
               req.user = { department: decodeToken.department, username: decodeToken.username}
               next(); 
           }
       });
    } else {
        res.status(400).json({message: 'No token provided!'})
    }
};