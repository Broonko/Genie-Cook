const userModel = require('../models/user.model')
const { handleError } = require("../utils")

function getProfile(req, res) {
  console.log(res.locals.userId)
  userModel
    .findById(res.locals.userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

module.exports = {
  getProfile
}