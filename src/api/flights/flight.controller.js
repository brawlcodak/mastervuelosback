const Flight = require('../../core/models/flight.model');

// Controlador para manejar la creación de un nuevo vuelo
exports.createFlight = async (req, res) => {
  try {
      // Lógica para crear un nuevo vuelo
      const newFlight = await Flight.create(req.body);
      res.status(201).json(newFlight);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el vuelo' });
  }
};

// Controlador para obtener todos los vuelos disponibles
exports.getAllFlights = async (req, res) => {
  try {
      // Lógica para obtener todos los vuelos disponibles
      const flights = await Flight.findAll();
      res.status(200).json(flights);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los vuelos' });
  }
};

// Endpoint para buscar vuelos
exports.findFlights = async (req, res) => {
  const { origin, destination, departureDate } = req.query;

  try {
    // Consultar vuelos según los parámetros de búsqueda
    const filteredFlights = await Flight.findAll({
      where: {
        origin: origin,
        destination: destination,
        departureDate: departureDate
      }
    });

    res.json(filteredFlights);
  } catch (error) {
    console.error('Error al buscar vuelos:', error);
    res.status(500).json({ error: 'Error al buscar vuelos' });
  }
};