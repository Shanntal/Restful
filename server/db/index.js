//this is the access point for all things database related!
const faker = require('faker');
const db = require('./db');
const seedData = require("./seedData");
const Entry = require("./models/Entry");
const User = require("./models/User");
const Resource = require("./models/Resource")

Entry.belongsTo(User);
User.hasMany(Entry);

const seedDB = async() => {
  await db.sync({ force: true });
  await seedData();
};

module.exports = {
  seedDB,
  db,
  models: {
    User,
    Entry,
    Resource
  },
};
