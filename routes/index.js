const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food');
const restaurantController = require('../controllers/restaurant');

router.get('/', (req, res) => {
  res.send('Success');
})

router.get('/food', foodController.getAll);

router.get('/restaurant', restaurantController.getAll);

module.exports = router;
