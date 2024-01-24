const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
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
  }
);

Category.sync().then(() => {
  Promise.all([
    Category.findOrCreate({
      where: { name: 'Entertainment' },
      defaults: { name: 'Entertainment' },
    }),
    Category.findOrCreate({
      where: { name: 'Bills' },
      defaults: { name: 'Bills' },
    }),
    Category.findOrCreate({
      where: { name: 'Food' },
      defaults: { name: 'Food' },
    }),
    Category.findOrCreate({
      where: { name: 'Misc' },
      defaults: { name: 'Misc' },
    }),
  ])
    .then(() => {
      console.log('Categories synced successfully');
    })
    .catch((err) => {
      console.error('Error syncing categories', err);
    });
});

module.exports = Category;