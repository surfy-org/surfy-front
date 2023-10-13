const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ! Ready for surfing ?');
});

server.listen(port, hostname, () => {
    console.log(`Welcome Node Surfy app`);
    console.log(`Server running at http://${hostname}:${port}/`);
});
