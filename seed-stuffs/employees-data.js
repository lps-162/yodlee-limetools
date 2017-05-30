const EmployeeModel = require('../models/employee').EmployeeModel;

const employeesData = [
    new EmployeeModel({
        emp_no: 123,
        birth_date: new Date(1983, 5, 14),
        first_name: 'LP Venkat',
        last_name: 'Perumal',
        gender: 'M',
        hire_date: new Date(2015, 1, 5),
        created_at: new Date()
    }),
    new EmployeeModel({
        emp_no: 124,
        birth_date: new Date(1982, 10, 5),
        first_name: 'PS Nanda',
        last_name: 'Palanisamy',
        gender: 'M',
        hire_date: new Date(2016, 5, 19),
        created_at: new Date()
    }),
    new EmployeeModel({
        emp_no: 125,
        birth_date: new Date(1983, 2, 6),
        first_name: 'G Ravikumar',
        last_name: 'Gopalsamy',
        gender: 'M',
        hire_date: new Date(2014, 8, 18),
        created_at: new Date()
    }),
    new EmployeeModel({
        emp_no: 126,
        birth_date: new Date(1989, 4, 25),
        first_name: 'Kavitha',
        last_name: 'Lakshmi',
        gender: 'F',
        hire_date: new Date(2017, 10, 7),
        created_at: new Date()
    })
];

module.exports = employeesData;
