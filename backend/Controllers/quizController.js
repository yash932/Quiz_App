const { Quiz } = require('../models');
const Question = require("../models/Question");

exports.createQuiz = async (req, res) => {
    try {
        const { title, category } = req.body;

        // Validate request data
        if (!title || !category) {
            return res.status(400).json({ message: "Title and Category are required" });
        }

        const quiz = await Quiz.create({ title, category });
        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

