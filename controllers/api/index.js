const router = require('express').Router();
const userRoutes = require('./userRoutes');
const transactionsRoutes = require('./TransactionsRoutes'); // Corrected import path

router.use('/users', userRoutes);
router.use('/transactions', transactionsRoutes);

module.exports = router;

