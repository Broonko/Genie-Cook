const jwt = require('jsonwebtoken')

const userModel = require('../models/client.model')

function authUser (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      userModel
        .findOne({ email: token.email })
        .then(user => {
          res.locals.agent = user
          next()
        })
        .catch(err => res.json(err))
    })
  }
}
module.exports = {
  authUser
}