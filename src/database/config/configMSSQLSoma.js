require("dotenv").config();

const production = {
  username: process.env.MSSQL_SOMA_PRODUCTION_USER,
  password: process.env.MSSQL_SOMA_PRODUCTION_PASS,
  database: process.env.MSSQL_SOMA_PRODUCTION_SCHEMA,
  host: process.env.MSSQL_SOMA_PRODUCTION_SOCKET,
  port: Number(1433),
  dialect: 'mssql',
  define: {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: {
    options: {
      requestTimeout: 120000, // 120 segundos
    },
  },
  pool: {
    max: 10,
    min: 1,
    idleTimeoutMillis: 120000, // 120 segundos
  },
}

const development = {
  username: process.env.MSSQL_SOMA_DEVELOPMENT_USER,
  password: process.env.MSSQL_SOMA_DEVELOPMENT_PASS,
  database: process.env.MSSQL_SOMA_DEVELOPMENT_SCHEMA,
  host: process.env.MSSQL_SOMA_DEVELOPMENT_SOCKET,
  port: Number(63173),
  dialect: 'mssql',
  define: {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: {
    options: {
      requestTimeout: 120000, // 120 segundos
    },
    instanceName: 'MSSQLSERVER01',
  },
  pool: {
    max: 10,
    min: 1,
    idleTimeoutMillis: 120000, // 120 segundos
  },
}

const config = {
  production,
  development,
};

module.exports = config;