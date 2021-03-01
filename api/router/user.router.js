const router = require('express').Router()
const { authUser } = require('../utils')

const {
  
} = require('../controllers/user.controller')

router.get('/', getAllRecepies)
router.get('/recepies/me', authUser, getUserRecepies)
router.get('/me', authUser,getUser)

module.exports = router