const mongoose = require('mongoose')
const recipeModel = require('../models/recipe.model.js')
const userModel = require('../models/user.model.js')
const populateFields = [
  'favourites',
  ...['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => {
    return ['breakfast', 'lunch', 'dinner'].map(time => { return `mealPlanning.${day}.${time}` })
  }).flat()
]
async function getProfile(req, res) {
  const userPopulated = await userModel.findById(res.locals.user._id)
  const results = await userPopulated.deepPopulate(populateFields)
  res.json(results)
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
  const user = await userModel.findById(res.locals.user._id)
  const recipe = await recipeModel.findById(req.params.id)
  user.mealPlanning[req.params.day][req.params.time] = recipe

  const updated = await userModel
    .findByIdAndUpdate(res.locals.user._id, user, { new: true })
    .deepPopulate(populateFields)
  res.json(updated.mealPlanning)
}

module.exports = {
  getProfile,
  updateFavourites,
  addMeal
}
