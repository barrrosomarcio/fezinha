const Router = require('express').Router();
const { getStats } = require('../controller/lotofacil');

Router.get('/stats', getStats);

module.exports = Router;