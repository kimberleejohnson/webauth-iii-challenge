// The protected routes all live in the auth router 

// Requiring dependencies
const router = require('express').Router(); 
const bcrypt = require('bcryptjs'); 

// Requiring data model 
const Users = require('../users/users-model.js'); 

// Requiring secrets 
// const secrets = require('../config/secrets.js')

// Requiring jswonwebtoken, after npm install 
const jwt = require('jsonwebtoken');

// Registering a user (C in CRUD)
router.post('/register', (req, res) => {
    // The req must have a user
    let user = req.body; 

    // Setting the password entered to a hash
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash; 

    // Using the add method to add a user to the database 
    Users.add(user)
    .then(saved => {
        res.status(201).json(saved); 
    })
    .catch(error => {
        res.status(500).json(error);
    });
}); 

module.exports = router; 