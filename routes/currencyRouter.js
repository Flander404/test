const Router = require('express')
const currencyController = require('../controllers/currencyController')
const router = new Router()

router.post('/', currencyController.create)
router.get('/', currencyController.getAll)
router.get('/:id', currencyController.getOne)

module.exports = router