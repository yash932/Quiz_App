const express = require('express');
const { createQuiz, getQuizzes} = require('../Controllers/quizController');

const router = express.Router();

router.post('/', createQuiz);
router.get('/', getQuizzes);


module.exports = router;