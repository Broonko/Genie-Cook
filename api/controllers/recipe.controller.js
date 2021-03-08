const recipeModel = require('../models/recipe.model')

const { findRecipes } = require('../services/spoonacular')

async function getRecipes (req, res) {
  try {
    const result = await findRecipes(req.query.ingredients)
    const recipes = []
    result.forEach(async (recipe) => {
      const newRecipe = {
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.usedIngredients.map(ingredient => ingredient.name),
        calories: recipe.calories,
        carbs: recipe.carbs,
        fat: recipe.fat,
        protein: recipe.protein
      }
      recipes.push(newRecipe)
      const foundRecipe = await recipeModel.findOne({ recipeId: recipe.id })
      if (!foundRecipe) {
        await recipeModel.create(newRecipe)
      }
    })
    return res.json(recipes)
  } catch (error) {
    console.log(error)
    return res.json({ error: 'problem finding recipes' })
  }
}

// function getNutrition (req, res) {
//   console.log(req.params)
//   console.log('dentro de get nutrition')
//   console.log(req.query)
//   console.log(req + 'REC')
//   console.log(req.params.id + '3')
//   nutrition
//     .get(`${req.params.id}/nutritionWidget.json?apiKey=af663f23949f446b99686cea6f2c12f6`)
//     .then(response => {
//       res.json(response.data)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }

module.exports = {
  getRecipes
  // getNutrition
}
