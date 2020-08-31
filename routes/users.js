const router = require('express').Router()

// @desc:   Test route to confirm server and route are running
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send('Users test route is working ')
})

module.exports = router
