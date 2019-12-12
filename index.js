const http = require('http');
const port = process.env.PORT || 3000;

// Instantiate the HTTP server
const httpServer = http.createServer((req, res) => {
  const data = JSON.stringify({ data: 'Hello World!' });
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(data);
});

// Start the HTTP server
httpServer.listen(port, () => {
  console.log('The HTTP server is running on port ' + port);
});