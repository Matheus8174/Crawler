const { Router } = require('express');
const crawlerRoutes = require('./crawler');

const routes = Router();
const prefixRoutes = '/api/v1';

routes. use(`${prefixRoutes}/crawler`, crawlerRoutes);

module.exports = routes;
