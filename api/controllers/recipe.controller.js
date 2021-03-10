const recipeModel = require('../models/recipe.model')
const queryModel = require('../models/query.model')

const API = require('../services/spoonacular')

async function findCached (req, res, next) {
  const cached = await (await queryModel.findOne({ queryText: req.query.ingredients }).populate('recipes'))
  /*queryModel.findOne({ queryText: req.query.ingredients })
    .then(cached => {
      console.log(cached)
    return res.json(cached.recipes)
  })*/
  if (cached) {
    return res.json(cached.recipes)
  } else {
    return next()
  }
}

async function getRecipes (req, res) {
  try {
    const result = await API.findRecipes(req.query.ingredients)
    const recipes = []
    const queryRecipes = []
    await Promise.all(result.map(async (recipe) => {
      const newRecipe = {
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.usedIngredients.map(ingredient => ingredient.name),
        measurements: recipe.usedIngredients.map(measurement => measurement.original),
        calories: recipe.calories,
        carbs: recipe.carbs,
        fat: recipe.fat,
        protein: recipe.protein,
        summary: recipe.summary
      }
      recipes.push(newRecipe)
      const foundRecipe = await recipeModel.findOne({ recipeId: recipe.id })
      if (!foundRecipe) {
        const createdRecipe = await recipeModel.create(newRecipe)
        queryRecipes.push(createdRecipe._id)
      } else {
        queryRecipes.push(foundRecipe._id)
      }
    }))
    await queryModel.create({ queryText: req.query.ingredients, recipes: queryRecipes })
    return res.json(recipes)
  } catch (error) {
    console.log(error)
    return res.json({ error: 'problem finding recipes' })
  }
}
async function getRecipe(req, res) {
  console.log('here i am')
  try {
    console.log(req.params)
    const singleRecipe = await recipeModel.findOne({ recipeId: req.params.id })
    return res.json(singleRecipe)
  } catch (error) {
    console.log(error)
    return res.json({ error: 'problem finding recipe' })
  }
}

  module.exports = {
    getRecipes,
    findCached,
    getRecipe
  }
