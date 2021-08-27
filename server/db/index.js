//this is the access point for all things database related!
const faker = require('faker');
const db = require('./db');
const seedData = require("./seedData");
const Journal = require("./models/Journal");
const User = require("./models/User");
const Resource = require("./models/Resource")

Journal.belongsTo(User);
User.hasMany(Journal);

const seedDB = async() => {
  await db.sync({ force: true });
  await seedData();
};

module.exports = {
  seedDB,
  db,
  models: {
    User,
    Journal,
    Resource
  },
};
