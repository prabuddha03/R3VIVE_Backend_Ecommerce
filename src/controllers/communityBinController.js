const Bin = require('./../models/communityBinModel');
const factory = require('./handlerFactory');

exports.getAllBins = factory.getAll(Bin);
exports.getBin = factory.getOne(Bin);
exports.createBin = factory.createOne(Bin);
exports.updateBin = factory.updateOne(Bin);
exports.deleteBin = factory.deleteOne(Bin);
