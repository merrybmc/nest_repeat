// == import http from 'http'
const http = require('http');

// localhost => 127.0.0.1 => loop back => 서버를 실행한 컴퓨터
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // writeHead => status, header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});

// return
server.listen(port, host, () => {
  console.log('server running on http://localhost:3000');
});
