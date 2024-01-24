const sequelize = require('../config/connection');
const { User, Category } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userData = [
    // your user data here
  ];

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.findOrCreate({
    where: { name: 'Default', user_id: users[0].id }, // Assuming users[0] is the created user
    defaults: { name: 'Default', user_id: users[0].id }, // Assuming users[0] is the created user
  });

  console.log('Database seeded successfully');
  process.exit(0);
};

seedDatabase();

