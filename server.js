const http = require('http');

const server = http.createServer((req, res) => {
  res.end('The first responce');
});

// use enviroment var in production or port 3001
server.listen(process.env.PORT ||3001);
