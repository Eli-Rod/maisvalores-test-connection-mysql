require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
// const errors = require('./errors');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.get('/readiness_check', (req, res) => res.status(200).json(
  {
    message: 'API subiu.',
  },
));

app.get('/liveness_check', (req, res) => res.status(200).json(
  {
    message: 'API viva.',
  },
));

app.use(routes);

// app.use(errors);

module.exports = app;
