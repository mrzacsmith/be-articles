const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    article: { type: String, required: true, trim: true },
    authorname: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Article', ArticleSchema)
