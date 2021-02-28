process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

mongoose.connect(process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || 'test',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }, err => {
    if (err) { throw new Error(err) }
    console.info('💾 Connected to Mongo Database \n')
  })

// ADDING MIDDLEWARES & ROUTER
const app = express()
  .use(cors())
  .use(morgan('combined'))
  .use(express.json())
  .use('/api', require('./router/index.js'))


app.listen(3000, function () {
  
  console.info('>'.repeat(40))
  console.info('💻  Rosana Server Live')
  console.info(`📡  PORT: http://localhost:3000`)
  console.info('>'.repeat(40) + '\n')})
