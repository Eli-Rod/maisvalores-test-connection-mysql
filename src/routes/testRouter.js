const express = require('express');
const router = express.Router();

const testController = require('../controller/testController');

router.get('/mysql', testController.selectTest);

module.exports = router;