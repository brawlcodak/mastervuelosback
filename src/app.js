const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const helmet = require('helmet');

// Importar los módulos de enrutamiento
const flightsRoutes = require('./api/flights/flights.routes');
const reservationsRoutes = require('./api/reservations/reservations.routes');
const statisticsRoutes = require('./api/statistics/statistics.routes');
/* 
* Settings
*/

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Master Flight Backend');
});

// Middleware para el análisis de cuerpos de solicitud JSON
app.use(express.json());

// Configurar las rutas utilizando los módulos de enrutamiento
app.use('/api', flightsRoutes);
app.use('/api', reservationsRoutes);
app.use('/api', statisticsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});