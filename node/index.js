// Load the core http module.
var http = require('http');
// Create a new server that always responds with a text file
// containing "Hello World"
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World\n');
});
// Start the server on port 3000
server.listen(3000);
// Print out a nice message so you know that the server started
console.log('Server running on port 3000');