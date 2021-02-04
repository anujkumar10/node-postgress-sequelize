const Sales = require('../models').Sales;
const sequelize = require('sequelize');
const { Op } = require('sequelize');

const { getStartEndDate } = require('../helper');

module.exports = {
    async list(req, res) {
        const { filterDate, statsFrequency } = req.body;
        const { startDate, endDate, frequency } = getStartEndDate(filterDate, statsFrequency);

        try {
            const sales = await Sales.findAll({
                attributes: [
                    [sequelize.fn('date_trunc', frequency, sequelize.col('date')), 'date'],
                    [sequelize.fn('sum', sequelize.col('amount')), 'totalAmount'],
                ],
                where: {
                    'date': {
                        [Op.between]: [startDate, endDate]
                    }
                },
                group: [sequelize.fn('date_trunc', frequency, sequelize.col('date'))]
            });

            res.status(200).send(sales);
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async add(req, res) {
        try {
            const sale = await Sales.create({
                userName: req.body.userName,
                amount: req.body.amount,
                date: req.body.date
            });

            res.status(200).send(sale);
        } catch (error) {
            res.status(400).send(error)
        }

    }
}