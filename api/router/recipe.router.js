const router = require('express').Router()

const {
  getRecipes
  // getNutrition
} = require('../controllers/recipe.controller')

router.get('/search', getRecipes)
// router.get('/:id', getNutrition)
// router.post("/", addRecipe);

module.exports = router
