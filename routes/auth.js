const passport = require('passport')
const { model } = require('../models/User')
const router = require('express').Router()

// @desc:   Authenication with google
// @route:  GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc:   Google auth callback
// @route:  GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect()
  }
)

// @desc:   Log out use
// @route:  GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
