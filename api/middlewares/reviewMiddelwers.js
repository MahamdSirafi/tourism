const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

const Reg = require('../models/registrantModel');
exports.checkReg = catchAsync(async (req, res, next) => {
  const thisUser = await Reg.findOne({
    user: req.body.user,
    tour: req.body.tour,
  });
  if (!thisUser)
    return next(
      new appError('you dont have a regesteration to this tour ', 400)
    );
  next();
});
