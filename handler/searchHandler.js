const qs = require('qs')
const { axios } = require('../axiosConfig');
const { PAGE_SIZE } = require('../constants');

// Route handler for search route
const searchHandler = async(req, res)=>{
    try{
        console.log("req.query", req.query)
        const query = qs.stringify(req.query);
        console.log("query", query);
        if(query) {
            console.log("in")
            const response = await axios.get(`everything?pageSize=${PAGE_SIZE}&${query}`);
            console.log("response.data", response)
            return res.send(response.data);
        } else {
            throw new Error('Query string requred');
        }
    } catch(err){
        res.send(err)
    } 
}

module.exports = searchHandler;