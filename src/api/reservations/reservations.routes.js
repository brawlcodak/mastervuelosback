const express = require('express');
const router = express.Router();
const reservationsController = require('./reservation.controller');

// Ruta para crear una nueva reserva
router.post('/reservations', reservationsController.createReservation);

// Ruta para obtener todas las reservas existentes
router.get('/reservations', reservationsController.getAllReservations);

module.exports = router;
