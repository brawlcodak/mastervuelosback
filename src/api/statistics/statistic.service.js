const Flight = require('../../core/models/flight.model');

exports.getAirlinesWithMostReservations = async () => {
    try {
        const airlines = await Flight.findAll({
            attributes: ['airline', [sequelize.fn('COUNT', 'id'), 'totalReservations']],
            group: ['airline'],
            order: sequelize.literal('totalReservations DESC'),
            limit: 10
        });
        return airlines;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener la lista de aerolíneas con más reservas');
    }
};

exports.getRegisteredAirlinesCount = async () => {
    try {
        const airlines = await Flight.findAll();
        return airlines;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los nombres de las aerolíneas y sus conteos');
    }
};

