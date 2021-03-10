const router = require('express').Router()
const { userSignup, userLogin } = require('../controllers/auth.controller')

router.post('/signup', userSignup)
router.post('/login', userLogin)

module.exports = router
