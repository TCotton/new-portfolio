const mongoose = require('mongoose');

module.exports = mongoose.model('Comments', {
  name : {
    type: String,
    default: '',
    trim: true,
  },
  email: {
    type: String,
    default: '',
    trim: true,
  },
  url: {
    type: String,
    default: '',
    trim: true,
  },
  message: {
    type: String,
    default: '',
    trim: true,
  },
  blogId: {
    type: String,
    default: '',
    trim: true,
  },
  published: {
    type: Boolean,
    default: '',
    trim: true,
  },
  publishedDate: {
    type: Date,
    default: '',
    trim: true,
  }
});
