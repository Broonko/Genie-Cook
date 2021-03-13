const mongoose = require('mongoose')
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
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    tuesday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    wednesday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    thursday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    friday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    saturday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    },
    sunday: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        default: ''
      }
    }
  }
})

const usermodel = mongoose.model('user', userSchema)
module.exports = usermodel
