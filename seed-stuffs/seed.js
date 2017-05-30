const mongoose = require('mongoose');
const EmployeeModel = require('../models/employee').EmployeeModel;
const employeesData = require('./employees-data');

const express = require('express');
const app = express();

// setting up environment variables
const config = require('../config/config.json')[app.get('env')];

//mongoose.Promise = require('bluebird').Promise;

mongoose.connect(config.MONGODB_URI);
const db = mongoose.connection;

db.on('error', (err) => {
    process.exit(-1);
});

db.once('open', function() {

    let numberOfEmployeesSaved = 0;

    // Removing all the existing employees
    EmployeeModel.remove({}, (err) => {
        if (err) throw err;
        console.log('Employees Removed');

        console.log('Seeding the database');
        for (let employee of employeesData) {
            employee.save((err) => {
                if (err) {
                    console.log('Error :' + JSON.stringify(err.errors));
                    throw err;
                }
                numberOfEmployeesSaved += 1;

                console.log('Employee Saved');

                if (numberOfEmployeesSaved === employeesData.length) {
                    mongoose.disconnect();
                }
            });
        }
    });
    
});



