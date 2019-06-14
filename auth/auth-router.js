// The protected routes all live in the auth router 

// Requiring dependencies
const router = require('express').Router(); 
const bcrypt = require('bcryptjs'); 

// Requiring data model 
const Users = require('../users/users-model.js'); 

// Requiring secrets 
const secrets = require('../config/secrets.js')

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

// Logging a user in (C in CRUD)
router.post('/login', (req, res) => {
    let {username, password } = req.body; 

    Users.findBy({ username })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            // Using tokens, we need to manually generate and send token as part of response 
            // We'll write the function below 
            const token = generateToken(user); 

            res.status(200).json({
                // After token generated, we have to add to response
                message: `Welcome ${user.username}!`, token
            }); 
        } else {
            res.status(401).json({ message: 'Invalid credentials.'}); 
        } 
    })
    .catch(error => {
        res.status(500).json(error); 
    });
});

// Writing the function that generates our token 
function generateToken(user) {
    // Defining payload, containing claims (info) for token 
    const payload = {
        subject: user.id, 
        username: user.username, 
        department: user.department
    }

    const options = {
        expiresIn: '1d'
    }

    // Grabs the jwtSecret to verify token 
    return jwt.sign(payload, secrets.jwtSecret, options); 
}

module.exports = router; 