const router = require("express").Router();
const { authUser } = require("../utils");

const { getRecipes } = require("../controllers/recipe.controller");

router.get("/:ingredients", getRecipes);
// router.post("/", addRecipe);

module.exports = router;
