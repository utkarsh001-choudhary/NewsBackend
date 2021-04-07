const express = require('express');
const router = express.Router();
const searchHandler = require('../handler/searchHandler');

router.get('/', searchHandler);

module.exports = router;