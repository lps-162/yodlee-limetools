const LocalStrategy = require('passport-local').Strategy;

const UserModel = require('../models/user');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        UserModel.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local.signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        UserModel.findOne({ 'local.email' : email }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (user) {
                req.flash('error', 'User already exists machan');
                return done(null, false);
            }

            let newUser = new UserModel();
            newUser.local.fullname = req.body.fullname;
            newUser.local.email = req.body.email;
            newUser.local.password = newUser.encryptPassword(req.body.password);

            newUser.save(function(err) {
                if (err) {
                    return done(err);
                }

                return done(null, newUser);
            });
        });
    }));

    passport.use('local.login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        UserModel.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user) {
                req.flash('loginMessage', 'No user found.')
                return done(null, false);
            }
                

            // if the user is found but the password is wrong
            if (!user.validPassword(password)) {
                req.flash('error', 'Oops! Wrong password.');
                return done(null, false);
            }
                
            // all is well, return successful user
            return done(null, user);
        });

    }));
}
