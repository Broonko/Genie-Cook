const router = require('express').Router()

const {
  getRecipes,
  findCached
} = require('../controllers/recipe.controller')

router.get('/search', findCached, getRecipes)
// router.get('/:id', getNutrition)
// router.post("/", addRecipe);

module.exports = router
