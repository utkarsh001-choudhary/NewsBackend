const express = require('express');
const qs = require('qs')
const router = express.Router();
const { axios } = require('../axiosConfig');

router.get('/', (req, res)=>{
    let query = qs.stringify(req.query)
    console.log(req.query);
    axios.get(`everything?${query}`).then((response)=>{
        res.send(response.data);
    }).catch((err)=>{
        res.send(err);
    })

});
module.exports = router;