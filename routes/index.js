const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food');
const restaurantController = require('../controllers/restaurant');

router.get('/', (req, res) => {
  res.send('Success');
})

router.post('/food', foodController.insertOne);
router.get('/food', foodController.getAll);
router.get('/food/:id', foodController.getById);
router.put('/food/:id', foodController.updateById);
router.delete('/food/:id', foodController.deleteById);

router.post('/restaurant', restaurantController.insertOne);
router.get('/restaurant', restaurantController.getAll);
router.get('/restaurant/:id', restaurantController.getById);
router.put('/restaurant/:id', restaurantController.updateById);
router.delete('/restaurant/:id', restaurantController.deleteById);

module.exports = router;
