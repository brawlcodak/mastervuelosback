const Sequelize = require('sequelize');

const sequelize = new Sequelize('mastervuelos_db', '352138', 'mastervuelos123#', {
    host: 'mysql-mastervuelos.alwaysdata.net',
    dialect: 'mysql'
});

module.exports = sequelize;