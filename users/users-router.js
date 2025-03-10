// Defining router
const router = require('express').Router(); 

// Requiring data model 
const Users = require('./users-model.js'); 
const restricted = require('../auth/restricted-middleware.js'); 

// Get route to display users
router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json({ users, user: req.user}); 
    })
    .catch(err => res.send(err));
});

module.exports = router; 