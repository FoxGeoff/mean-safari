/**
 * file: backend/post.js
 */

const mongoose = require("mongoose");


// NB String in Mongoose / javascript and not string (TypeScript) in Angular
// Todo: options: required: true
const postSchema = mongoose.Schema({
  title: { type: String, default: "Missing Title" },
  content: { type: String, default: "Missing Content" },
});

// Schema and Model combined
module.exports = mongoose.model("Post", postSchema);
