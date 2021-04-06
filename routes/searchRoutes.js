const { response } = require('express');
const express = require('express');
const router = express.Router();
const { axios } = require('../axiosConfig');

router.get('/', (req, res)=>{
    axios.get('everything?q=bitcoin').then((response)=>{
        console.log(response.data)
        res.send(response.data);
    }).catch((err)=>{
        res.send(err);
    })

});
module.exports = router;
