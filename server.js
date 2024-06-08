const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const { notFoundHandler, errorHandler } = require('./src/config/middleware/error.middleware');
const prefix = `api`;
const version = `v1`;
const pathPrefix = `${prefix}/${version}`;
const userModule = require('./src/user_module');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors())

app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded



app.use(`/${pathPrefix}/users`, userModule);

console.log("pathPrefix", pathPrefix);
app.use(errorHandler);
app.use(notFoundHandler);

module.exports = app;