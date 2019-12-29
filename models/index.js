const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};
console.log(config.database);
console.log(config.dialect);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Board = require('./Board')(sequelize, Sequelize);
// db.User = require('./User')(sequelize, Sequelize);
module.exports = db;
