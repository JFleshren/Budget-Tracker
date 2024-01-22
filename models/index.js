const User = require('./User');
const Transactions = require('./transactions');

User.hasMany(Transactions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Transactions.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Transactions };