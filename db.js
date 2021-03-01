const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Applejacks1234@localhost:5432/workout-log-2");

module.exports = sequelize;