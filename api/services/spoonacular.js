const axios = require('axios').default

const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  timeout: 2000,
  params: {
    apiKey: process.env.API_KEY,
    number: 3
  }
})

function findRecipes (ingredients) {
  return API.get('/findByIngredients', { params: { ingredients } })
}

// "https://api.spoonacular.com/recipes/complexSearch?apiKey=d44a9f25d4934489975bd7efa617bb08&includeIngredients=&addRecipeInformation=true"

module.exports = { findRecipes }
