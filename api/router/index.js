const router = require("express").Router();
const authRouter = require("./auth.router");
const recipeRouter = require("./recipe.router");

router.use("/auth", authRouter);
router.use("/recipes", recipeRouter);

module.exports = router;
