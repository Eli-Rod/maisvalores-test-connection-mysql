const Test = require('../services/Test');

/** @type {import("express").RequestHandler} **/
const selectTest = async (req, res) => {
  try {
    const infos = await Test.selectTest();

    return res.status(200).json(infos);
  } catch (e) {
    console.log('Erro ao processar requisição. ' + e);
    return res.status(500).json({msg: 'Erro ao processar requisição. ' + e})
  }
};

const testController = {
  selectTest,
};

module.exports = testController;