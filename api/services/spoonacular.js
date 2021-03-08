const axios = require('axios').default

const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  timeout: 2000,
  params: {
    apiKey: process.env.API_KEY,
    number: 3
  }
})

async function findRecipes (ingredients) {
  const recipes = await API.get('/findByIngredients', { params: { ingredients } })
  return Promise.all(recipes.data.map(async recipe => {
    const nutrition = await API.get(`/${recipe.id}/nutritionWidget.json`)
    console.log('nutrition', nutrition)
    return {
      ...recipe,
      calories: nutrition.data.calories,
      carbs: nutrition.data.carbs,
      fat: nutrition.data.fat,
      protein: nutrition.data.protein
    }
  }))
}

module.exports = { findRecipes }
