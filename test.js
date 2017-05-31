
const mysqlConnectionPool = require('./config/mysql-connection');

mysqlConnectionPool.query('SELECT * from employees', function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.stringify(results));
});