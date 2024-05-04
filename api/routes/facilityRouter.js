const facilityController = require('../controllers/facilityController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicImgMiddlewers = require('./../middlewares/dynamicImgMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(facilityController.getAllfacility)
  .post(
    authMiddlewers.restrictTo('admin'),
    dynamicImgMiddlewers.uploadPhoto('facility', 'image'),
    dynamicMiddleware.setPathImginBody('facility', 'image'),
    facilityController.createfacility
  );
router
  .route('/:id')
  .get(facilityController.getfacility)
  .patch(
    authMiddlewers.restrictTo('admin'),
    dynamicImgMiddlewers.uploadPhoto('facility', 'image'),
    dynamicMiddleware.setPathImginBody('facility', 'image'),
    facilityController.updatefacility
  )
  .delete(
    authMiddlewers.restrictTo('admin'),
    facilityController.deletefacility
  );
module.exports = router;
