const EmployeeModel = require('../models/employee').EmployeeModel;


function listEmployees(req, res) {
    EmployeeModel.find({}, function(err, employees) {
        if (err) throw err;
        res.render('employees/list', { employees: employees });
    });
}

function showEmployeeDetails(req, res) {
    const employeeId = req.params.id;

    EmployeeModel.findOne({ _id: employeeId }).then((employee) => {
        res.render('employees/details', { 
            employee: employee
        });
    }).catch((err) => {
        res.render('error', { message: 'Error Fetching Employees' });
    });
}


function showCreateForm(req, res) {
    res.render('employees/create');
}

function createEmployee(req, res) {

    console.log(req.body);

    res.redirect('/employees');
}


module.exports = {
    listEmployees: listEmployees,
    showEmployeeDetails: showEmployeeDetails,
    showCreateForm: showCreateForm,
    createEmployee: createEmployee
}