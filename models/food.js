const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  expired_date: {
    type: Date,
    default: new Date().toISOString()
  }
});

let Food = mongoose.model('Food', foodSchema);

module.exports = Food;
