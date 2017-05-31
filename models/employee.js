const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    emp_no: {
        type: Number,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    first_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    last_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F'],
    },
    hire_date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

EmployeeSchema.pre('save', function(next) {
    
    // get the current date
    let currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

module.exports = {
    EmployeeModel : EmployeeModel
};