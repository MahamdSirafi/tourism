const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('./../middlewares/dynamicMiddleware');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(addVarBody('user', 'userId'), reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(authMiddlewers.restrictTo('admin'), reviewController.deleteReview);
module.exports = router;
