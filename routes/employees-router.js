const express = require('express');

const employeesRouter = express.Router();
const employeesController = require('../controllers/employees-controller');

employeesRouter.get('/employees/create', employeesController.showCreateForm);
employeesRouter.post('/employees/create', employeesController.createEmployee);

employeesRouter.get('/employees/:id/edit', employeesController.showEditForm);
employeesRouter.post('/employees/:id/edit', employeesController.updateEmployee);

employeesRouter.post('/employees/:id/delete', employeesController.deleteEmployee);

employeesRouter.get('/employees', employeesController.listEmployees);
employeesRouter.get('/employees/:id', employeesController.showEmployeeDetails);

module.exports = employeesRouter;
