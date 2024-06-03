// Create web server
// Create a web server that listens to incoming requests on port 3000 and responds with a JSON object containing all comments. 
// Use the comments array you created before.
// If the server receives a request to a different route, it should respond with a 404 status code and a message 'Page not found'.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: comments.js
const comments = [
    { id: 1, author: 'John', body: "Hello!" },
    { id: 2, author: 'Amy', body: "Good morning" },
    { id: 3, author: 'Jane', body: "How are you?" }
  ];
  
  module.exports = comments;

// To test the server, start the server with the command node comments.js and send a GET request to http://localhost:3000/comments using Postman or your browser. 
// You should receive a JSON response with all comments. If you send a request to a different route, you should receive a 404 status code and a 'Page not found' message.
// Example:
// $ node comments.js
// Server is running on port 3000
// GET http://localhost:3000/comments
// Response: 
// [
//   {"id":1,"author":"John","body":"Hello!"},
//   {"id":2,"author":"Amy","body":"Good morning"},
//   {"id":3,"author":"Jane","body":"How are you?"}
// ]
// GET http://localhost:3000/invalid-route
// Response: 
// Page not found
// Status code: 404

// Path: comments.js
// Create a new comment
// Add a new route to the web server that listens for POST requests to the /comments route. 
// When a POST request is received, the server should parse the incoming JSON data