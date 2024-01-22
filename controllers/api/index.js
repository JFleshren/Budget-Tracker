const router = require('express').Router()
const userRoutes = require('./userRoutes')
const TransactionsRoutes = require('./transactionsRoutes')

router.use('/users', userRoutes)
router.use('/transactions', TransactionsRoutes)

module.exports = router
