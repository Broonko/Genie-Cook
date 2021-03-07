//const recipeModel = require('../models/recipe.model')
const { handleError } = require("../utils")
const axios = require ('axios')
const api = axios.create({
  baseURL:"https://api.spoonacular.com/recipes/findByIngredients?apiKey=af663f23949f446b99686cea6f2c12f6&number=3&ingredients=",
  timeout: 2000
})
const nutrition = axios.create({
  baseURL:"https://api.spoonacular.com/recipes/",
  timeout: 2000
})


// "https://api.spoonacular.com/recipes/complexSearch?apiKey=d44a9f25d4934489975bd7efa617bb08&includeIngredients=&addRecipeInformation=true"

function getRecipes (req, res){
  console.log('tu puta madre')
  console.log(req.params)
  console.log(params.ingredients)
  api
  .get(req.params.ingredients)
  .then(response => {
    res.json(response.data)
  })
  .catch(err => {
    console.error(err)
  })
}
function getNutrition (req, res){
  console.log(req.params)
  console.log('dentro de get nutrition')
  console.log(req.query)
  console.log(req + 'REC')
  console.log(req.params.id + '3')
  nutrition
  .get(`${req.params.id}/nutritionWidget.json?apiKey=af663f23949f446b99686cea6f2c12f6`)
  .then(response => {
    res.json(response.data)
  })
  .catch(err => {
    console.error(err)
  })
}

module.exports = { 
 getRecipes,
 getNutrition
}