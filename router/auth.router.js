const router = require('express').Router()
const { userSignup, userLogin } = require('../controllers/auth.controller')

router.post('/userSignup', userSignup)
router.post('/userLogin', userLogin)

module.exports = router