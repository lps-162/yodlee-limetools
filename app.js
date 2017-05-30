const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

// setting up routes
const pagesRouter = require('./routes/pages-router');
const employeesRouter = require('./routes/employees-router');
app.use(pagesRouter);
app.use(employeesRouter);

app.listen(3000, () => {
    console.log('Server listening on port no 3000');
});