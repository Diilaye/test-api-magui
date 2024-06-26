
const Sequelize = require('sequelize');

require('dotenv').config({
    path: './.env'
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,

});


module.exports = sequelize;