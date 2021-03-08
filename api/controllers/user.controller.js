function getProfile (req, res) {
  res.json(res.locals.user)
}

module.exports = {
  getProfile
}
