const router = require("express").Router();
const { authUser } = require("../utils");

const { 
  getRecipes, 
  getNutrition 
} = require("../controllers/recipe.controller");

router.get("/ingredients/:ingredients", getRecipes);
router.get("/id/:id", getNutrition)
// router.post("/", addRecipe);

module.exports = router;
