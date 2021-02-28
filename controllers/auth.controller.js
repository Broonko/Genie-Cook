const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function userSignup (req, res) {
  const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
   userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone,
      image: req.body.image,
      password: encryptedPasswd
    })
    .then(user=> {
      const data = { email: agent.email, name: agent.name }
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
        return
      } else {
        const result = bcrypt.compareSync(req.body.password, agent.password)
        if (result) {
          const data = { email: agent.email, name: agent.name }
          const token = jwt.sign(data, process.env.SECRET)
          res.status(200).json({ token: token, ...data })
          res.send('Passwords do not match')
        }
      }
    })
}
module.exports = {
  userSignup,
  userLogin
}