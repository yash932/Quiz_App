const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('Quiz', 'root', 'smart@2099', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
})

module.exports = sequelize;