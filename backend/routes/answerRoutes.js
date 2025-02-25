const express = require('express');
const { submitAnswer } = require('../Controllers/answerController');

const router = express.Router();

router.post('/', submitAnswer);

module.exports = router;