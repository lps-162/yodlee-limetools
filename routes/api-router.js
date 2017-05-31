const express = require('express');

const apiRouter = express.Router();
const apiController = require('../controllers/api-controller');

const KnexPool = require('../config/knex');

apiRouter.get('/api/employees', apiController.getAllEmployees);
apiRouter.post('/api/employees', apiController.createEmployee);

apiRouter.get('/api/employees/:id', apiController.getSingleEmployee);

module.exports = apiRouter;