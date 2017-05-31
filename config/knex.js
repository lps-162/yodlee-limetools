var knexPool = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'world',
  },
  pool: {
    min: 0,
    max: 20
  }
});


module.exports = knexPool;
