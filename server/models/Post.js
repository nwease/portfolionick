const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: String,
  description: String
})

const Post = mongoose.model("Post", postSchema)

module.exports = {
  model: Post
}
