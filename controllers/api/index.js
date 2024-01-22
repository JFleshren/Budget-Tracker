const router = require('express').Router()
const userRoutes = require('./userRoutes')
const TransactionsRoutes = require('./TransactionsRoutes')

router.use('/users', userRoutes)
router.use('/Transactions', TransactionsRoutes)

module.exports = router
