const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
  recipeId: {
    type: String
  },
  title: {
    type: String
  },
  image: {
    type: String
  },
  ingredients: {
    type: Array
  },
  instructions: { 
    type: Array
  }
})
const recipeModel = mongoose.model('recipe', recipeSchema)
  module.exports = recipeModel;