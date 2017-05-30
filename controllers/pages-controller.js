module.exports = {
    showHomePage: showHomePage,
    showAboutPage: showAboutPage
}

function showHomePage(req, res) {
    res.render('pages/home');
}

function showAboutPage(req, res) {
    res.render('pages/about');
}