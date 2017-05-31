module.exports = {
    showSignupForm: showSignupForm,
    showLoginForm: showLoginForm,
    showUserProfile: showUserProfile,
    isLoggedIn: isLoggedIn,
    logoutUser: logoutUser
};

function showSignupForm(req, res) {
    res.render('auth/signup');
}

function showLoginForm(req, res) {
    res.render('auth/login');
}

function showUserProfile(req, res) {
    res.render('auth/profile', { user: req.user });
}

function logoutUser(req, res, next) {
    req.logout();
    res.redirect('/');
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}