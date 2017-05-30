const EmployeeModel = require('../models/employee').EmployeeModel;
const moment = require('moment');

function postProcessData(employee) {
    employee.birth_date = moment(employee.birth_date).format('YYYY-MM-DD'); 
    employee.hire_date = moment(employee.hire_date).format('YYYY-MM-DD');

    employee.created_at = moment(employee.created_at).format('YYYY-MM-DD');
    employee.updated_at = moment(employee.updated_at).format('YYYY-MM-DD');
}

function listEmployees(req, res) {
    EmployeeModel.find({}, function(err, employees) {
        if (err) throw err;
        res.render('employees/list', { employees: employees });
    });
}

function showEmployeeDetails(req, res) {
    const employeeId = req.params.id;

    EmployeeModel.findOne({ _id: employeeId }).lean().then((employee) => {
        postProcessData(employee);
        res.render('employees/details', { 
            employee: employee
        });
    }).catch((err) => {
        console.log(err);
        res.render('error', { message: 'Error Fetching Employees' });
    });
}


function showCreateForm(req, res) {
    res.render('employees/create');
}

function createEmployee(req, res) {

    console.log(req.body);
    let employee = new EmployeeModel(req.body);
    employee.save().then((employee) => {
        res.redirect('/employees/' + employee.id);
    }).catch((err) => {
        res.render('error', { message: 'Error insertin Employee' });
    });
}

function showEditForm(req, res) {
    const employeeId = req.params.id;
    
    EmployeeModel.findOne({ _id: employeeId }).lean().then((employee) => {
        postProcessData(employee);
        res.render('employees/edit', { 
            employee: employee
        });
    }).catch((err) => {
        res.render('error', { message: 'Error Fetching Employees' });
    });
}

function updateEmployee(req, res, next) {
    const employeeId = req.params.id;

    EmployeeModel.findByIdAndUpdate(employeeId, req.body).then((employee) => {
        res.redirect('/employees/' + employee.id);
    }).catch((err) => {
        res.render('error', { message: 'Error insertin Employee' });
    });

}

module.exports = {
    listEmployees: listEmployees,
    showEmployeeDetails: showEmployeeDetails,
    showCreateForm: showCreateForm,
    createEmployee: createEmployee,
    showEditForm: showEditForm,
    updateEmployee: updateEmployee
}