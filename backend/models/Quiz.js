const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Quiz = sequelize.define('Quiz', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false  },
    category: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Quiz;