const express = require('express');
const qs = require('qs')
const router = express.Router();
const { axios } = require('../axiosConfig');
const { PAGE_SIZE } = require('../constants');

router.get('/', (req, res)=>{
    let query = qs.stringify(req.query)
    axios.get(`everything?pageSize=${PAGE_SIZE}&${query}`).then((response)=>{
        res.send(response.data);
    }).catch((err)=>{
        res.send(err);
    })

});
module.exports = router;