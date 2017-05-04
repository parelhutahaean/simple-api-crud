const Restaurant = require('../models/restaurant');

let methods = {};

methods.getAll = (req, res) => {
  Restaurant.find({}, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}
