const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

async function authUser(req, res, next) {
  console.log('utils')
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    try {
      const token = await jwt.verify(req.headers.token, process.env.SECRET)
      const user = await userModel.findOne({ email: token.email }, '-password -__v')
      res.locals.user = user
      return next()
    } catch (error) {
      return res.status(403).json({ error: 'Token not valid' })
    }
  }
}
module.exports = {
  authUser
}
