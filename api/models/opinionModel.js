const mongoose = require('mongoose');
const opinionSchema = new mongoose.Schema({
  opinion: {
    required: [true, 'must enter opinion'],
    type: String,
  },
  user: {
    required: [true, 'must enter user'],
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Opinion = mongoose.model('Opinion', opinionSchema);
module.exports = Opinion;
