const router = require('express').Router()
const userRoutes = require('./userRoutes')


const transactions = require('./transactions.js');

router.use('/users', userRoutes)
router.use('./transactions', transactionsRoutes)

module.exports = router;
