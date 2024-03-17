const Reservation = require('../../core/models/reservation.model');

exports.createReservation = async (req, res) => {
  try {
      // Lógica para crear una nueva reserva
      const newReservation = await Reservation.create(req.body);
      res.status(201).json(newReservation);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la reserva' });
  }
};

// Controlador para obtener todas las reservas existentes
exports.getAllReservations = async (req, res) => {
  try {
      // Lógica para obtener todas las reservas existentes
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener las reservas' });
  }
};