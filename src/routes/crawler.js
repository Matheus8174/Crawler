const { Router } = require('express');

const CrawlerController = require('../controller/CrawlerController');

const crawlerController = new CrawlerController();

const crawlerRoutes = Router();

crawlerRoutes.get('/', crawlerController.execute);

module.exports = crawlerRoutes;