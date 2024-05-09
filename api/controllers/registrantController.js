const Registrant = require('../models/registrantModel');
const handlerFactory = require('../utils/handlerFactory');
exports.createregistrant = handlerFactory.createOne(Registrant);
exports.deleteregistrant = handlerFactory.deleteOne(Registrant);
exports.getAllregistrant = handlerFactory.getAllpop1(
  Registrant,
  { path: 'user', select: 'name email -_id' },
  { path: 'tour', select: 'name -_id' }
);
