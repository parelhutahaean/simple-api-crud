const Food = require('../models/food');

let methods = {};

methods.getAll = (req, res) => {
  Food.find({}, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}
