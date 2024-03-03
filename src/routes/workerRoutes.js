const express = require('express');
// const authController = require('./../controllers/authController');
const workerController = require('./../controllers/workerController');

const router = express.Router();

router.route('/').get(workerController.getAllWorkers);

router.route('/:id').get(workerController.getWorker);

module.exports = router;
