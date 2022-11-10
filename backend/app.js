/**
 * File: app.js
 * run 'npm i --save express'
 * File adds a chain of express callback functions
 */
const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
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
    }
  ];

  /**
   * Demo first serve data (POST)
   */
  res.status(200).json({
    message: "success, data from server",
    posts: posts
  });
});

module.exports = app;
