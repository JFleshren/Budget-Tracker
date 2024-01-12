const express = require('express');
const router = express.Router();
const { Transaction, Category } = require('../../models');
router.post('/', async (req, res) => {
    const { user_id, description, amount, date } = req.body;
  
    try {
      const transactionData = await Transaction.create({
        user_id,
        description,
        amount,
        date,
        category_id: entertainmentCategoryId,
      });
  
      res.status(200).json(transactionData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;