const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class transactions extends Model {}

transactions.init(
  {
    //attributes of a transaction
    cost: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the sequelize connection
    timestamps: true, // Add timestamps (createdAt, updatedAt) to the model
    modelName: 'example', // Set the model name
  }
);

module.exports = transactions;