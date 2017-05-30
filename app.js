const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json());

// setting up routes
const pagesRouter = require('./routes/pages-router');
const employeesRouter = require('./routes/employees-router');
app.use(pagesRouter);
app.use(employeesRouter);

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.listen(3000, () => {
    console.log('Server listening on port no 3000');
});