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
const Board = require('./Board')(sequelize, Sequelize);
const User = require('./User')(sequelize, Sequelize);
// User.hasMany(Board, { as: 'BoardId' });
db.User = User;
db.Board = Board;
module.exports = db;
