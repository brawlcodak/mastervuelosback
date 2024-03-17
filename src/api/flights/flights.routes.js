const express = require('express');
const router = express.Router();
const flightController = require('./flight.controller');

// Ruta para crear un nuevo vuelo
router.post('/flights', flightController.createFlight);

// Ruta para obtener todos los vuelos disponibles
router.get('/flights', flightController.getAllFlights);

// Ruta para obtener todos los vuelos disponibles
router.get('/flights', flightController.findFlights);

module.exports = router;