const Food = require('../models/food');

let methods = {};

methods.insertOne = (req, res) => {
  Food.create(req.body, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  });
}

methods.getAll = (req, res) => {
  Food.find({}, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}

methods.getById = (req, res) => {
  Food.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}

methods.updateById = (req, res) => {
  Food.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    doc.name = req.body.name || doc.name;
    doc.price = req.body.price || doc.price;
    doc.expired_date = req.body.expired_date || doc.expired_date;
    doc.save((err, docNew) => {
      if (!err) res.json(docNew);
    });
  })
}

methods.deleteById = (req, res) => {
  Food.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    doc.remove((err, docNew) => {
      if (!err) res.json(docNew);
    })
  })
}

module.exports = methods;
