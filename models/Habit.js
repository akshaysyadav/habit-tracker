const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  logs: [
    {
      date: Date,
      status: {
        type: String,
        enum: ['done', 'missed', 'none'],
        default: 'none'
      }
    }
  ]
});

module.exports = mongoose.model('Habit', habitSchema);
