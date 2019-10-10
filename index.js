// Import our server 
const server = require('./api/server.js');

// Create a port backup for heroku
const port = process.env.PORT || 5000;

// Listen to our server/port
server.listen(port, () => {
    console.log(`\n* Server running on port ${port}... *\n`)
});