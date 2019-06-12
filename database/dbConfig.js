// Requiring knex 
const knex = require('knex'); 

// Requiring knexConfiguration 
const knexConfig = require('../knexfile.js'); 

// Exporting 
module.exports = knex(knexConfig.development); 