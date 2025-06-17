const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

router.post('/questions', questionController.create);
router.get('/questions', questionController.findAll);

module.exports = router;