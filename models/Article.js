const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema(
  {
    title: {},
    article: {},
    authorname: {},
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Article', ArticleSchema)
