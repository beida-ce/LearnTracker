const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  },
}, { timestamps: true });

module.exports = mongoose.model('education', educationSchema);
