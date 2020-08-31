module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticted()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureGuest: (req, res, next) => {
    if (req.isAuthenticted()) {
      res.redirect('/test')
    } else {
      return next()
    }
  },
}
