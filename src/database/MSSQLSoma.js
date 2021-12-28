const Sequelize = require('sequelize');
const config = require('./config/configMSSQLSoma');

let sequelize;

if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize({
    username: config.development.username,
    password: config.development.password,
    database: config.development.database,
    host: config.development.host,
    socketPath: config.development.socketPath,
    port: config.development.port,
    dialect: config.development.dialect
  });
} else if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize({
    username: config.production.username,
    password: config.production.password,
    database: config.production.database,
    host: config.production.host,
    socketPath: config.production.socketPath,
    port: config.production.port,
    dialect: config.production.dialect
  });
};


module.exports = sequelize;
