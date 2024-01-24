const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')


class category extends Model {}
category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
)
category.sync().then(() => {
  Promise.all([
    category.findOrCreate({
      where: { name: 'entertainment' },
      defaults: { name: 'entertainment' },
    }),
    category.findOrCreate({
      where: { name: 'bills' },
      defaults: { name: 'bills' },
    }),
    category.findOrCreate({
      where: { name: 'food' },
      defaults: { name: 'food' },
    }),
    category.findOrCreate({
      where: { name: 'fisc' },
      defaults: { name: 'fisc' },
    }),
  ])
    .then(() => {
      console.log('categories synced successfully')
    })
    .catch((err) => {
      console.error('Error syncing', err)
    })
})

module.exports = category;
