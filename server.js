/**
 * File server.js
 * Very basic server using Express framwork
 */

const http = require('http');
const app = require('./backend/app');

// use enviroment var in production or port
const port =process.env.PORT || 3002;

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
