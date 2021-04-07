const qs = require('qs')
const { axios } = require('../axiosConfig');

// Route handler for inital route
const intialHandler = async(req, res)=>{
    try{

        if(req.query && (req.query.q=="*" || req.query.q=="")){
            delete req.query.q;
        }

        const query = qs.stringify(req.query);
        
        const response = await axios.get(`top-headlines?country=gb&${query}`)

        return res.send(response.data);
        
    } catch(err){
        res.send(err)
    } 
}

module.exports = intialHandler;