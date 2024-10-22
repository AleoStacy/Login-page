// server.js
const jsonServer = require('json-server'); // Import JSON Server
const server = jsonServer.create(); // Create a new server instance
const router = jsonServer.router('db.json'); // Specify the database file
const middlewares = jsonServer.defaults(); // Default middlewares (logger, CORS, etc.)

// Use the default middlewares
server.use(middlewares);

// Add custom routes or middleware here if needed
// Example: Custom route to greet users
server.get('/greet', (req, res) => {
  res.jsonp({ message: 'Hello, welcome to the API!' });
});

// Use the router to handle requests
server.use(router);

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:3000/`);
});
