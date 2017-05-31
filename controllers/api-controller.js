module.exports = {
    getAllEmployees: getAllEmployees,
    getSingleEmployee: getSingleEmployee,
    createEmployee: createEmployee
};

const ValidationHelpers = require('../helpers/validation-helper');

const tableName = 'employees';
const KnexPool = require('../config/knex');
const Joi = require('joi');
const EmployeeValidationSchema = require('../models/validation').EmployeeValidationSchema;

function getAllEmployees(req, res) {
    KnexPool.select().table(tableName).limit(20).then(function(result) {
        res.status(200).json(result);
    }).catch(function(err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
}

function getSingleEmployee(req, res) {
    const id = req.params.id;

    KnexPool(tableName).where({ id: id }).then(function(result) {
        res.status(200).json(result[0]);
    }).catch(function(err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
}

function createEmployee(req, res) {
    const payload = req.body;
 
    const validationResult = Joi.validate(req.body, EmployeeValidationSchema, { abortEarly: false});
    if (validationResult.error === null) {
        KnexPool(tableName).insert(payload).then(function (insertedId) {
            payload.id = insertedId[0];
            res.status(201).json(payload);
        }).catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
    } else { 
        let errors = ValidationHelpers.formatJoiValidationErrors(validationResult);
        res.status(500).json({error: true, data: {message: errors}});
    }
    
}