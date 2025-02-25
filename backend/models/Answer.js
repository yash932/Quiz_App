const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Answer = sequelize.define('Answer', {
    // id: { type: DataTypes.INTEGER, autoIncrement: true, primarykey: true  },
    userAnswer: { type: DataTypes.STRING, allowNull: false  },
    isCorrect: { type: DataTypes.BOOLEAN, allowNull: false }
});

module.exports = Answer;