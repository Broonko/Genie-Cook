const router = require('express').Router()

const {
  getRecipes,
  findCached,
  getRecipe
} = require('../controllers/recipe.controller')

router.get('/search', findCached, getRecipes) // puedo llamar a varias funciones???
router.get('/:id', getRecipe)
// router.post("/", addRecipe);

module.exports = router
