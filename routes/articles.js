const { model } = require('../models/Article')

const router = require('express').Router()
const Article = require('../models/Article.js')

router.get('/test', (req, res) => {
  res.send('Article test route is working')
})

router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
