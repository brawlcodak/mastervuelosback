const { DataTypes } = require('sequelize');
const sequelize = require('../db/db'); 

const Reservation = sequelize.define('Reservation', {
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
    },
    airline: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Reservation.sync();

module.exports = Reservation;