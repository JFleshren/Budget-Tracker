const user = require('./user')
const transactions = require('./transactions')

User.hasMany(transactions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Transactions.belongsTo(user, {
  foreignKey: 'user_id',
})

module.exports = { user, transactions }
