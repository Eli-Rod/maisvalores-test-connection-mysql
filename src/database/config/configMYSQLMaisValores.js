require("dotenv").config();
const dbSocketPath = '/cloudsql';
const INSTANCE_CONNECTION_NAME = 'maisvalores:us-central1:prd-maisvalores'

const production = {
  username: process.env.MYSQL_MAISVALORES_PRODUCTION_USER,
  password: process.env.MYSQL_MAISVALORES_PRODUCTION_PASS,
  database: process.env.MYSQL_MAISVALORES_PRODUCTION_SCHEMA,
  host: process.env.MYSQL_MAISVALORES_PRODUCTION_SOCKET,
  socketPath: `${dbSocketPath}/${INSTANCE_CONNECTION_NAME}`,
  port: Number(3306),
  dialect: 'mysql',
  define: {
    paranoid: true
  }
}

const development = {
  username: process.env.MYSQL_MAISVALORES_DEVELOPMENT_USER,
  password: process.env.MYSQL_MAISVALORES_DEVELOPMENT_PASS,
  database: process.env.MYSQL_MAISVALORES_DEVELOPMENT_SCHEMA,
  host: process.env.MYSQL_MAISVALORES_DEVELOPMENT_SOCKET,
  socketPath: `${dbSocketPath}/${INSTANCE_CONNECTION_NAME}`,
  port: Number(3307),
  dialect: 'mysql',
  define: {
    paranoid: true
  }
}

const config = {
  production,
  development,
};

module.exports = config;