// Create Web Server
// Create a web server that listens on port 3000. When it receives a GET request on /comments, it should send back the contents of the comments.json file.
// If the comments.json file does not exist, it should send back a 404 status code.
// If there is a server error, it should send back a 500 status code.
// You should use the http module and not Express.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end();
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});