const mongoose = require('mongoose')
const deepPopulate = require('mongoose-deep-populate')(mongoose)

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipe'
  }],
  mealPlanning: {
    monday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
      },
    },
    tuesday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
    },
    wednesday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
    },
    thursday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
    },
    friday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
    },
    saturday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
    },
    sunday: {
        breakfast: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        lunch: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        },
        dinner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'recipe'
        }
      }
  }
})

userSchema.plugin(deepPopulate)
const usermodel = mongoose.model('user', userSchema)
module.exports = usermodel
