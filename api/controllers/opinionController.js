const Opinion = require('../models/opinionModel');
const handlerFactory = require('../utils/handlerFactory');
exports.createopinion = handlerFactory.createOne(Opinion);
exports.deleteopinion = handlerFactory.deleteOne(Opinion);
exports.getAllopinion = handlerFactory.getAll(Opinion);
