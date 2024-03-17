const statisticsService = require('./statistic.service');

exports.getAirlinesWithMostReservations = async (req, res) => {
    try {
        const airlines = await statisticsService.getAirlinesWithMostReservations();
        res.status(200).json(airlines);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las aerolíneas con más reservas' });
    }
};

exports.getRegisteredAirlinesCount = async (req, res) => {
    try {
        const count = await statisticsService.getRegisteredAirlinesCount();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el número de aerolíneas registradas' });
    }
};
