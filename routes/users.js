const router = require('express').Router()

// GET /test
router.get('/test', (req, res) => {
  res.send('Users test route is working ')
})

module.exports = router
