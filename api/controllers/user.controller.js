const mongoose = require('mongoose')
const userModel = require('../models/user.model.js')

function getProfile (req, res) {
  res.json(res.locals.user)
}

async function updateFavourites (req, res) {
  if (res.locals.user.favourites.find(elem => elem.equals(mongoose.Types.ObjectId(req.params.id)))) {
    res.locals.user.favourites = res.locals.user.favourites.filter(elem => !elem.equals(mongoose.Types.ObjectId(req.params.id)))
  } else {
    res.locals.user.favourites.push(req.params.id)
  }
  const user = await userModel
    .findByIdAndUpdate(res.locals.user._id, { favourites: res.locals.user.favourites }, { new: true })
  res.json(user.favourites)
}

async function addMeal (req, res) {
  const user = await userModel
    .findById(res.locals.user._id)

  user.mealPlanning[req.params.day][req.params.time] = req.params.id

  const updated = await userModel
    .findByIdAndUpdate(res.locals.user._id, user, { new: true })
  res.json(updated.mealPlanning)
}

module.exports = {
  getProfile,
  updateFavourites,
  addMeal
}
