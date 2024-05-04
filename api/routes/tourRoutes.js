const express = require('express');
const tourController = require('./../controllers/tourController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
// const { uploadTourPhotos } = require('./../middlewares/imgTourMiddlewar');
const router = express.Router();
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour
  )
  .delete(
    authMiddlewers.protect,
    authMiddlewers.restrictTo('admin'),
    tourController.deleteTour
  );

module.exports = router;

// dynamicMiddleware.filteredBody("imageCover", "image"),
// dynamicMiddleware.setPathImginBody("restaurants", "imageCover", "image"),
