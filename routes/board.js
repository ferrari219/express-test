const express = require('express');
const board = require('../controllers/board');
const route = express.Router();

route.post('/', board.boardWrite);
route.get('/', board.boardRead);

module.exports = route;
