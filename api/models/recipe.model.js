const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  image: {
    type: String
  },
  ingredients: {
    type: [String]
  }
  // instructions: {
  //   type: Array
  // }
})

const recipeModel = mongoose.model('recipe', recipeSchema)
module.exports = recipeModel
