const opinionController = require('../controllers/opinionController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(opinionController.getAllopinion)
  .post(addVarBody('user', 'userId'), opinionController.createopinion);
router
  .route('/:id')
  .delete(authMiddlewers.restrictTo('admin'), opinionController.deleteopinion);
module.exports = router;
