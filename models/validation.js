const Joi = require('joi');

const EmployeeValidationSchema = Joi.object().keys({
    emp_no: Joi.number().required().min(5).max(10000),
    birth_date: Joi.date().required(),
    first_name: Joi.string().required().min(2).max(14),
    last_name: Joi.string().required().min(2).max(16),
    gender: Joi.string().required().allow('M', 'F'),
    hire_date: Joi.date().required()
});

module.exports = {
    EmployeeValidationSchema: EmployeeValidationSchema
};