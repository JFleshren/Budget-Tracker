const sequelize = require('../config/connection')
const { user, category } = require('../models')

const seedDatabase = async () => {
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  await category.findOrCreate({
    where: { name: 'Default', user_id: user.id },
    defaults: { name: 'Default', user_id: user.id },
  })

  console.log('Database seeded successfully')
  process.exit(0)
}

seedDatabase()
