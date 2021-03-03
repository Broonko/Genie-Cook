//const recipeModel = require('../models/recipe.model')
const { handleError } = require("../utils")
const axios = require ('axios')
const api = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/findByIngredients?apiKey=d44a9f25d4934489975bd7efa617bb08&ingredients=chicken",
  timeout: 2000
})

function getRecipes (req, res){
  
  //
  api
  .get()
  .then(response => {
    res.json(response.data)
  })
  .catch(err => {
    handleError(err, res)
  })
}

module.exports = { 
 getRecipes
}