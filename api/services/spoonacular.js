const axios = require('axios').default

const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  timeout: 5000,
  params: {
    apiKey: process.env.API_KEY,
    number: 6
  }
})

async function findRecipes (ingredients) {
  const recipes = await API.get('/findByIngredients', { params: { ingredients } })
  return Promise.all(recipes.data.map(async recipe => {
    const nutrition = await API.get(`/${recipe.id}/nutritionWidget.json`)
    const summary = await API.get(`/${recipe.id}/summary`)
    const steps = await API.get(`/${recipe.id}/analyzedInstructions`)

    // console.log(steps.data.map(e => e.steps.map(i => i.step))[0])

    // const initialSteps = steps.data.map(e => e.steps.map(i => i.step))
    // let combSteps = []
    // initialSteps.forEach(elem => { combSteps = [...combSteps, ...elem] })
    // console.log(combSteps)

    return {
      ...recipe,
      steps: steps.data.map(e => e.steps.map(i => i.step))[0],
      calories: nutrition.data.calories,
      carbs: nutrition.data.carbs,
      fat: nutrition.data.fat,
      protein: nutrition.data.protein,
      summary: summary.data.summary
    }
  }))
}

module.exports = { findRecipes }
