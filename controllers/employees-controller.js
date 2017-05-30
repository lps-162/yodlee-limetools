
module.exports = {
    listEmployees: listEmployees,
    showEmployeeDetails: showEmployeeDetails,
    showCreateForm: showCreateForm,
    createEmployee: createEmployee
}

function listEmployees(req, res) {
    
    res.render('employees/list', { employees: employees });
}

function showEmployeeDetails(req, res) {
    const employeeId = req.params.id;

    res.render('employees/details');
}


function showCreateForm(req, res) {
    res.render('employees/create');
}

function createEmployee(req, res) {

    console.log(req.body);

    res.redirect('/employees');
}
