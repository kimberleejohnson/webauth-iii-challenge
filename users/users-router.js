// Defining router
const router = require('express').Router(); 

// Requiring data model 
const Users = require('./users-model.js'); 
// PLACEHOLDER FOR RESTRICTED MIDDLEWARE 

// HOLD FOR CHECK ROLE MIDDLEWARE 

// Get route to display users
router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json({ users, user: req.user}); 
    })
    .catch(err => res.send(err));
});

module.exports = router; 