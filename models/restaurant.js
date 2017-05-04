const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  open_status: {
    type: Boolean,
    default: true
  }
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
