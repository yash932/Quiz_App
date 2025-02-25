const express = require('express');
const { createQuiz, getQuizzes} = require('../Controllers/quizController');

const router = express.Router();

router.post('/', createQuiz);
router.get('/', getQuizzes);

//this is comment


module.exports = router;