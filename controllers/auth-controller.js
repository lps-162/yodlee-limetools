module.exports = {
    showSignupForm: showSignupForm,
    showLoginForm: showLoginForm,
    showUserProfile: showUserProfile
};

function showSignupForm(req, res) {
    res.render('auth/signup');
}

function showLoginForm(req, res) {
    res.render('auth/login');
}

function showUserProfile(req, res) {
    res.render('auth/profile');
}