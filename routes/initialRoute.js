const express = require('express');
const qs = require('qs')
const router = express.Router();
const { axios } = require('../axiosConfig');

router.get('/', (req, res)=>{
    if(req.query.q=="*" || req.query.q==""){
        delete req.query.q;
        console.log(req.query)
    }
    let query = qs.stringify(req.query)
    
    axios.get(`top-headlines?country=gb&${query}`).then((response)=>{
        res.send(response.data);
    }).catch((err)=>{
        res.send(err);
    })

});
module.exports = router;