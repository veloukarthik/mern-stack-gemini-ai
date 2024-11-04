const http = require('http');

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
}

function helloWorld(req, res, next) {
  res.write('Hello, World!');
  next();
}

function endResponse(req, res) {
  res.end();
}

const middlewares = [logger, helloWorld, endResponse];

const server = http.createServer((req, res) => {
  let index = 0;

  function next() {
    const middleware = middlewares[index];
    index++;
    if (middleware) {
      middleware(req, res, next);
    }
  }

  next();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
