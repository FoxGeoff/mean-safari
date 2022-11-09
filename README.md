# Mean-Safari - template for Node Backend server and Rest API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project Introduction

### Kanban Task: Chapter 3 : Adding NodeJS to our Project Video: Adding the Node Backend

1. Add backend folder
2. Add server.js file
3. Run Command: 'node server.js'
4. Node server keep running. Need restart after change

#### Task: Add express - simplify node commands

1. Run: 'npm i --save express'
2. Add file: backend/app.js

```javascript
/**
 * File: app.js
 * run 'npm i --save express'
 * File adds a chain of express callback functions
 */
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('first middleware just ran')
  next();
});

app.use((req, res, next) => {
  res.send('all done with Express middleware!')
});

module.exports = app;
```

``` Javascript
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
```
