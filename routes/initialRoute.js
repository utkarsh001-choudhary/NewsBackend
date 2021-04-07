const express = require('express');
const qs = require('qs')
const router = express.Router();
const { axios } = require('../axiosConfig');
const initialHandler = require('../handler/initialHandler');

router.get('/', initialHandler);

module.exports = router;