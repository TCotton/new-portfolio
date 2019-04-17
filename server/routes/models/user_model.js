const mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
  name : {
    type: String,
    default: '',
    trim: true,
  },
  password: {
    type: String,
    default: '',
    trim: true,
  }
});
