const Router = require('express')
const checkRole = require('../middleware/checkRoleMidddleware')
const aboutController = require('../controllers/aboutController')
const router = new Router()

router.post('/', aboutController.create )
router.get('/', aboutController.getAll)
router.put('/:id', aboutController.update)

module.exports = router