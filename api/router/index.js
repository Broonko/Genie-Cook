const router = require('express').Router()

const authRouter = require('./auth.router')
const recipeRouter = require('./recipe.router')
const userRouter = require('./user.router')

router.use('/auth', authRouter)
router.use('/recipes', recipeRouter)
router.use('/users', userRouter)

module.exports = router
