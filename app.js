const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./config/passport')(passport);
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const config = require('./config/config.json')[app.get('env')];
console.log(config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI);


app.set('view engine', 'ejs');
app.use(expressLayouts);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: "somecrazysecretoflife",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

// setting up routes
const pagesRouter = require('./routes/pages-router');
const employeesRouter = require('./routes/employees-router');
const authRouter = require('./routes/auth-router');
app.use(pagesRouter);
app.use(employeesRouter);
app.use(authRouter);

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.listen(3000, () => {
    console.log('Server listening on port no 3000');
});