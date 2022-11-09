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
