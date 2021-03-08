const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
  queryText: { // honey, chicken
    type: String
  },
  recipes: {
    type: [mongoose.Schema.ObjectId],
    ref: 'recipes'
  }
})

module.exports = mongoose.model('query', querySchema)
