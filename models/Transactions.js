const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const category = require('./category')

class transactions extends Model {}

transactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'transactions',
  },
)

// Connect to category model
transactions.belongsTo(category, {
  foreignKey: 'category_id',
})

module.exports = transactions;
