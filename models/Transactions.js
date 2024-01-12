const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');

class Transaction extends Model {}
Transaction.init(
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
      modelName: 'transaction',
    }
  );
  // Connect to category model
  Transaction.belongsTo(Category, {
    foreignKey: 'category_id',
  });
  
  module.exports = Transaction;