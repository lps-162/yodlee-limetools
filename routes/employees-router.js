const express = require('express');

const employeesRouter = express.Router();

employeesRouter.get('/employees', (req, res) => {
    res.render('employees/list');
});

employeesRouter.get('/employees/:employee_id', (req, res) => {
    const employeeId = req.params.employee_id;

    res.send('Employee details page : ' + employeeId);
});

module.exports = employeesRouter;
