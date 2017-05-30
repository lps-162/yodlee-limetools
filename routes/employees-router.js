const express = require('express');

const employeesRouter = express.Router();
const employeesController = require('../controllers/employees-controller');

employeesRouter.get('/employees/create', employeesController.showCreateForm);
employeesRouter.post('/employees/create', employeesController.createEmployee);

employeesRouter.get('/employees', employeesController.listEmployees);
employeesRouter.get('/employees/:id', employeesController.showEmployeeDetails);

module.exports = employeesRouter;
