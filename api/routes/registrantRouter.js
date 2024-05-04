const registrantController = require('../controllers/registrantController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(registrantController.getAllregistrant)
  .post(addVarBody('user', 'userId'), registrantController.createregistrant);
router
  .route('/:id')
  .delete(registrantController.deleteregistrant);
module.exports = router;
