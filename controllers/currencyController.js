const { Currency } = require('../models/models')
const ApiError = require('../error/ApiError')

class CurrencyController {
    async create(req, res) {
        const {valyt} = req.body
        const currency = await Currency.create({valyt})
        return res.json(currency)
    }
    async getAll(req, res){
        const currencys = await Currency.findAll()
        return res.json(currencys)
    }
    async getOne(req, res) {
        const { id } = req.params;
        const currency = await Currency.findOne({
            where: { id },
        });
        return res.json(currency)
    }
}

module.exports = new CurrencyController();