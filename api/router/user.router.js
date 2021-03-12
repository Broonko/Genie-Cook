const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getProfile,
  updateFavourites
} = require('../controllers/user.controller')

router.get('/me', authUser, getProfile)
router.put('/favourites/:id', authUser, updateFavourites)

module.exports = router
