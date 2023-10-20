const os = require('os');
const http = require('http');

const ip = '0.0.0.0';
const port = 3000;
const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hey Alex ! Your host is : ${hostname}`);
});

server.listen(port, ip, () => {
    console.log(`Welcome Node Surfy app`);
    console.log(`Server running at http://${ip}:${port}/`);
});
