const Worker = require('./../models/workerModel');
const factory = require('./handlerFactory');

exports.getAllWorkers = factory.getAll(Worker);
exports.getWorker = factory.getOne(Worker);
