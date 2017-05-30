
module.exports = {
    listEmployees: listEmployees,
    showEmployeeDetails: showEmployeeDetails
}

function listEmployees(req, res) {
    res.render('employees/list');
}

function showEmployeeDetails(req, res) {
    const employeeId = req.params.id;

    res.render('employees/detail');
}

