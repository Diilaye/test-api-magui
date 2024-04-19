const { DataTypes } = require('sequelize');

const sequelizeDB = require('../config/db');

const User = sequelizeDB.define('users', {
    // attributes
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
    },
    fonction: {
        type: DataTypes.TINYINT,
    },
    token: {
        type: DataTypes.STRING,
    }
});

module.exports = User;