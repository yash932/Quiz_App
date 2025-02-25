const express = require('express');
const { addQuestion, getQuestionsByQuiz } = require('../Controllers/questionController');

const router = express.Router();

router.post('/', addQuestion);
router.get('/:quizId', getQuestionsByQuiz);

module.exports = router;