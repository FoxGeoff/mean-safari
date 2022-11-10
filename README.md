# Mean-Safari - template for Node Backend server and Rest API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project Introduction

1. Original Code Ref: <https://github.com/PacktPublishing/Angular-and-Node.js---The-MEAN-Stack-Guide>

## Kanban Task: Chapter 3 : Adding NodeJS to our Project Video: Adding the Node Backend

1. Add backend folder
2. Add server.js file
3. Run Command: 'node server.js'
4. Node server keep running. Need restart after change

### Task: Add express - simplify node commands (video)

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
console.log('starting server on ' + port);
server.listen(port);
```

### Task: Improving the server.js Code (video)

```Javascript
/**
 * <https://github.com/PacktPublishing/Angular-and-Node.js---The-MEAN-Stack-Guide/tree/master/03.%20Adding%20NodeJS%20to%20our%20Project>
 */
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
```

1. run 'npm install --save-dev nodemon'

### Task: Fetching Initial Posts (Video)

1. This adds our first route

```javascript
// app.js (middleware)
// adding a path, status and json data
  res.status(200).json({
    message: "success, data from server",
    posts: posts
  });
```

``` Json
// returned data @ localhost:3000://api/posts
{
  "message":"success, data from server",
  "posts":
  [
    {"id":"asdasr","title":"first server-side post","content":"Test data #1 from the Node server"},{"id":"bgdsa","title":"second server-side post","content":"Test data #2 from the Node server"}
  ]
}
```

## Kanban Task: Chapter 4 : Working with MongoDB (Videos)

1. MongoDb NoSQL DB > Collections and Documents (SQL Tables and Records).

### Task: Adding Mongoose (video)

1. Used to connect to the Database
2. Add models folder
3. run 'npm install --save mongoose'
4 ref <https://www.npmjs.com/package//mongoose>

```javascript
/**
 * file: backend/post.js
 */

const mongoose = require("mongoose");

// NB String in Mongoose and not string in Angular
const postSchema = mongooseSchema({
  title: { type: String, required: true },
  content: { type: String, default: "Missing Data" },
});

module.exports = mongoose.model('Post', postSchema);
```

### Task: Creating a POST Instance (video)

1. Run: 'npm i --save body-parser'
2. Add to app.js
