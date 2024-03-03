const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, 'A Bin must have a bin number']
  },
  binTag: {
    type: String,
    required: [false, 'A product must not have a tag atleast'],
    enum: {
      values: ['biodegradable', 'Recycleable', 'dry waste'],
      message: 'productTag is : bio-degradable, recylced etc.'
    }
  },
  garbageAmount: {
    type: String
  },
  binStatus: {
    type: String,
    enum: {
      values: ['connected', 'inprogress', 'breakdown']
    }
  }
});

const Bin = mongoose.model('Bin', binSchema);

module.exports = Bin;
