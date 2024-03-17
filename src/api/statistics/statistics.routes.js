const express = require('express');
const router = express.Router();
const statisticsController = require('./statistic.controller');

// Ruta para obtener la lista de aerolíneas con más reservas
router.get('/statistics/topAirlines', statisticsController.getAirlinesWithMostReservations);

// Ruta para obtener el número de aerolíneas registradas
router.get('/statistics/registeredAirlinesCount', statisticsController.getRegisteredAirlinesCount);

module.exports = router;
