const mysql      = require('mysql');
const connectionPool = mysql.createPool({
        connectionLimit: 10,
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'world'
    });

module.exports = connectionPool;