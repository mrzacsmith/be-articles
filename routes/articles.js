const { model } = require('../models/Article')

const router = require('express').Router()
const Article = require('../models/Article.js')

// @desc:   Test route to confirm server and route are running
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send('Article test route is working')
})

// @desc:   get all articles
// @route:  GET /
router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// @desc:   Add new articles
// @route:  POST /add
router.post('/add', (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
  })

  newArticle
    .save()
    .then(() => res.json('The article was created'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// @desc:   Get article by id
// @route:  GET /:id
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// @desc:   Modidy and update article
// @route:  PUT /:id
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id)
    .then((article) => {
      ;(article.title = req.body.title),
        (article.article = req.body.article),
        (article.authorname = req.body.authorname)

      article
        .save()
        .then(() => res.json('Article has bee updated'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// @desc:   Delete article
// @route:  DELETE /:id
router.delete('/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('The article has been deleted'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
