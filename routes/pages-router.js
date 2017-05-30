const express = require('express')

const pagesRouter = express.Router();

pagesRouter.get('/', (req, res) => {
    res.render('pages/home');
});

pagesRouter.get('/about', (req, res) => {
    res.render('pages/about');
});

module.exports = pagesRouter;