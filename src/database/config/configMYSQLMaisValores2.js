'use strict';

const mysql = require('promise-mysql');
const fs = require('fs');

const dbSocketPath = '/cloudsql';
const INSTANCE_CONNECTION_NAME = 'maisvalores:us-central1:prd-maisvalores'


const createTcpPoolSslCerts = mysql.createPool({
  development: {
    username: process.env.MYSQL_MAISVALORES_DEVELOPMENT_USER, // e.g. 'my-db-user'
    password: process.env.MYSQL_MAISVALORES_DEVELOPMENT_PASS, // e.g. 'my-db-password'
    database: process.env.MYSQL_MAISVALORES_DEVELOPMENT_SCHEMA, // e.g. 'my-database'
    host: process.env.MYSQL_MAISVALORES_DEVELOPMENT_SOCKET,
    socketPath: `${dbSocketPath}/${INSTANCE_CONNECTION_NAME}`,
    port: Number(3307),
    dialect: 'mysql',
    define: {
      paranoid: true
    },
    // ssl: {
    //   sslmode: 'verify-full',
    //   ca: fs.readFileSync(process.env.DB_ROOT_CERT), // e.g., '/path/to/my/server-ca.pem'
    //   key: fs.readFileSync(process.env.DB_KEY), // e.g. '/path/to/my/client-key.pem'
    //   cert: fs.readFileSync(process.env.DB_CERT), // e.g. '/path/to/my/client-cert.pem'
    // },
    // ... Specify additional properties here.
  },
});

module.exports = createTcpPoolSslCerts;