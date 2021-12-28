const { QueryTypes } = require('sequelize');

const Mysql = require('../database/MaisValores');
const testQueries = require('../queries/testQueries');

const selectTest = async () => await Mysql.query(testQueries.selectTest(), {
  type: QueryTypes.SELECT,
});

const Test = {
  selectTest,
};

module.exports = Test;