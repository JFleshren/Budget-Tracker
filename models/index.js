const user = require('./user')
const transactions = require('./transactions')

user.hasMany(transactions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

transactions.belongsTo(user, {
  foreignKey: 'user_id',
})

module.exports = { user, transactions }
