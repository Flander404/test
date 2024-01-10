const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMidddleware')

router.post('/', brandController.create)
router.get('/', brandController.getAll)

module.exports = router