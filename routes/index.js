const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const aboutRouter = require('./aboutRouter')
const currencyRouter = require('./currencyRouter')
const homeRouter = require('./homeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/home', homeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/about', aboutRouter)
router.use('/currency', currencyRouter)

module.exports = router