const express = require('express');
const passport = require('passport');

const authRouter = express.Router();
const authController = require('../controllers/auth-controller');

authRouter.get('/auth/signup', authController.showSignupForm);
authRouter.post('/auth/signup', 
                passport.authenticate('local.signup', {
                    successRedirect: '/auth/profile',
                    failureRedirect: '/auth/signup',
                    failureFlash: true
                })
            );

authRouter.get('/auth/login', authController.showLoginForm);
authRouter.post('/auth/login', 
                passport.authenticate('local.login', {
                    successRedirect : '/auth/profile', // redirect to the secure profile section
                    failureRedirect : '/auth/login', // redirect back to the signup page if there is an error
                    failureFlash : true // allow flash messages
                })
            );

authRouter.get('/auth/profile', authController.showUserProfile);

module.exports = authRouter;