const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Quiz = require('./Quiz');

const Question = sequelize.define('Question', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.TEXT, allowNull: false },
    options: { type: DataTypes.JSON, allowNull: false },
    correctAnswer: { type: DataTypes.STRING, allowNull: false }
});

Quiz.hasMany(Question, { foreignKey: 'quizId' });
Question.belongsTo(Quiz, { foreignKey: 'quizId' });

module.exports = Question;