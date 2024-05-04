const Facility = require("../models/facilityModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getfacility = handlerFactory.getOne(Facility);
exports.createfacility = handlerFactory.createOne(Facility);
exports.updatefacility = handlerFactory.updateOne(Facility);
exports.deletefacility = handlerFactory.deleteOne(Facility);
exports.getAllfacility = handlerFactory.getAll(Facility);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
