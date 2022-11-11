/**
 * File: app.js
 * run 'npm i --save express'
 * File adds a chain of express callback functions (middleware)
 */
const express = require("express");
const bodyParser = require("body-parser");
const { Type } = require("@angular-devkit/build-angular");

const Post = require("./models/post");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
// ==============

// demo: a post end point route
// http://localhost:3000/api/posts
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

// demo app.use() for downloading data from server
// http://localhost:3000/api/posts
app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "asdasr",
      title: "first server-side post",
      content: "Test data #1 from the Node server",
    },
    {
      id: "bgdsa",
      title: "second server-side post",
      content: "Test data #2 from the Node server",
    },
  ];

  /**
   * Demo first serve data (app.use() and res.status())
   */
  res.status(200).json({
    message: "success, data from server",
    posts: posts,
  });
});

module.exports = app;
