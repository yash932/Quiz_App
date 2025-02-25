const { Question } = require('../models');

exports.addQuestion = async (req, res) => {
    try {
        const { text, options, correctAnswer, quizId } = req.body;
        const question = await Question.create({ text, options, correctAnswer, quizId: quizId });
        res.status(201).json({ message: `Question added succesfully`, question });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getQuestionsByQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const questions = await Question.findAll({where: { quizId } });
        res.json(questions);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};