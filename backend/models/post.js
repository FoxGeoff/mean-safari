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
