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
  },
  measurements: {
    type: [String]
  },
  calories: {
    type: Number
  },
  carbs: {
    type: String
  },
  fat: {
    type: String
  },
  protein: {
    type: String
  },
  summary: {
    type: String
  },
  steps: {
    type: [String]
  }
})

const recipeModel = mongoose.model('recipe', recipeSchema)
module.exports = recipeModel
