const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getProfile,
  updateFavourites,
  addMeal
} = require('../controllers/user.controller')

router.get('/me', authUser, getProfile)
router.put('/favourites/:id', authUser, updateFavourites)
router.put('/planning/:id/:day/:time', authUser, addMeal)

module.exports = router
