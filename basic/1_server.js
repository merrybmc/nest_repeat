// == import http from 'http'
const http = require('http');
const url = require('url');

// localhost => 127.0.0.1 => loop back => 서버를 실행한 컴퓨터
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // req.url = 요청을 보내온 url 추출
  const path = url.parse(req.url).pathname;

  // api
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page!</h1>');
  } else if (path === '/post') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Post Page!</h1>');
  } else if (path === '/user') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>User Page!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Page Not Found</h1>');
  }

  // writeHead => status, header
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end('<h1>Hello World</h1>');
});

// return
server.listen(port, host, () => {
  console.log('server running on http://localhost:3000');
});
