const express = require('express')

const pagesRouter = express.Router();
const pagesController = require('../controllers/pages-controller');

pagesRouter.get('/', pagesController.showHomePage);

pagesRouter.get('/about', pagesController.showAboutPage);

module.exports = pagesRouter;