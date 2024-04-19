const Sequelize = require('sequelize');

const sequelize = require('../config/db');


const Taches = sequelize.define('Taches', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

});


module.exports = Taches;