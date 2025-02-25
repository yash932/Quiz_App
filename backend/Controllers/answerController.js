const { Answer, Question } = require('../models');

exports.submitAnswer = async (req, res) => {
    try {
        const { userId, questionId, userAnswer } = req.body;
        const question = await Question.findByPk(questionId);
        if (!question) return res.status(404).json({message: 'Question not found' });

        const isCorrect = question.correctAnswer === userAnswer;
        const answer = await Answer.create({ userAnswer, isCorrect, Userid: userId, QuestionId: questionId });

        res.status(201).json({ message: 'Answer Submitted', answer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};