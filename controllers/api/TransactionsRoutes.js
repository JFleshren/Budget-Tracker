const express = require('express')
const router = express.Router()
const { transactions, category } = require('../../models')
router.post('/', async (req, res) => {
  const { user_id, description, amount, date } = req.body

  try {
    const transactionsData = await transactions.create({
      user_id,
      description,
      amount,
      date,
      category_id: entertainmentCategoryId,
      category_id: billsCategoryId,
      category_id: foodCategoryId,
      category_id: miscCategoryId,
    })

    res.status(200).json(transactionsData)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router;
