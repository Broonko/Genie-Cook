const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

function userSignup (req, res) {
  const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
  userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPasswd
    })
    .then(user => {
      const data = { email: user.email, name: user.name }
      const token = jwt.sign(data, process.env.SECRET)
      res.status(200).json({ token: token, ...data })
    })
    .catch(err => res.status(500).json(err))
}

function userLogin (req, res) {
  userModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        res.send('User not found')
      } else {
        const result = bcrypt.compareSync(req.body.password, user.password)
        if (result) {
          const data = { email: user.email, name: user.name }
          const token = jwt.sign(data, process.env.SECRET)
          return res.status(200).json({ token: token, ...data })
        } else {
          return res.send('Passwords do not match')
        }
      }
    })
}
module.exports = {
  userSignup,
  userLogin
}
