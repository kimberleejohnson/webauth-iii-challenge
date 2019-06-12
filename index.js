// Importing my server, which I wrote in a separate file 
const server = require('./api/server.js'); 

// Setting up my port for the server to listen 
const port = process.env.PORT || 5500; 
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`)); 