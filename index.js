const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 3000;

// Instantiate the HTTPS server
const httpsServerOptions = {
  'key': fs.readFileSync('./cert/key.pem'),
  'cert': fs.readFileSync('./cert/cert.pem')
};

const httpsServer = https.createServer(httpsServerOptions, (req, res) => {
  const data = JSON.stringify(JSON.stringify({ data: 'Hello World!' }));
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(data);
});

// Start the HTTPS server
httpsServer.listen(port, () => {
  console.log('The HTTPS server is running on port ' + port);
});
