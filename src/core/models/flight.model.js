const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Flight = sequelize.define('Flight', {
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrivalDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    airline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

Flight.sync();

module.exports = Flight;
