require('dotenv').config();
const express = require('express');
const app = express();
const {axiosSetup} = require('./axiosConfig');
const searchRoute = require('./routes/searchRoutes');


axiosSetup();

express.urlencoded({
    extended: true      
})
express.json()

app.use('/q', searchRoute);

app.get('/', (req, res)=>{

    res.send("data");
});

//Error handling if nothing matched
app.use(function(req, res, next){
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});


app.listen(process.env.PORT);

