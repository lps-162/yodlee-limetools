const pagesRouter = require('./pages-router');
const employeesRouter = require('./employees-router');

module.exports = function(app) {
    app.use(pagesRouter);
    app.use(employeesRouter);
};