const Restaurant = require('../models/restaurant');

let methods = {};

methods.insertOne = (req, res) => {
  Restaurant.create(req.body, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  });
}

methods.getAll = (req, res) => {
  Restaurant.find({}, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}

methods.getById = (req, res) => {
  Restaurant.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    res.json(doc);
  })
}

methods.updateById = (req, res) => {
  Restaurant.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    doc.name = req.body.name || doc.name;
    doc.owner = req.body.owner || doc.owner;
    doc.address = req.body.address || doc.address;
    doc.open_status = req.body.open_status || doc.open_status;
    doc.save((err, docNew) => {
      if (!err) res.json(docNew);
    });
  })
}

methods.deleteById = (req, res) => {
  Restaurant.findById(req.params.id, (err, doc) => {
    if (err) res.json(err);
    doc.remove((err, docNew) => {
      if (!err) res.json(docNew);
    })
  })
}

module.exports = methods;
