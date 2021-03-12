const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
  queryText: { // honey, chicken
    type: String
  },
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipe'
  }]
})

module.exports = mongoose.model('query', querySchema)
