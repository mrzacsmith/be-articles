const { model } = require('../models/Article')

const router = require('express').Router()
const Article = require('../models/Article.js')

// GET /test
router.get('/test', (req, res) => {
  res.send('Article test route is working')
})

// GET /
router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// POST /add
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

// GET /:id
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json('Error: ' + err))
})

// PUT /:id
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

// DELETE /:id

module.exports = router
