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
    "Origin, X-Requested-Width",
    "Content-Type, Accept"
  );

  res.setHeader(
    "Access-control-Allow-Methods",
    "GET, POST, PATCH< OPTIONS"
  );

  next();
});
// ==============

// demo: a post end point route
// http://localhost:3000/api/posts
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

// demo app.use() for downloading data from server
// http://localhost:3000/api/use/posts
app.use("/api/use/posts", (req, res, next) => {
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
