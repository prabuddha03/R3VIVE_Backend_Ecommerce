const express = require('express');
// const authController = require('./../controllers/authController');
const binController = require('./../controllers/communityBinController');

const router = express.Router();

router
  .route('/')
  .get(binController.getAllBins)
  .post(binController.createBin);

router.route('/:id').get(binController.getBin);

module.exports = router;
