const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, 'A Bin must have a bin number']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  workingDays: {
    type: String
  },
  performance: {
    type: String
  },
  engaged: {
    type: Boolean,
    default: true,
    select: false
  }
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
