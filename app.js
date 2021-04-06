require('dotenv').config();
const express = require('express');
const app = express();
const {axiosSetup} = require('./axiosConfig');
const searchRoute = require('./routes/searchRoutes');
const initialRoute = require('./routes/initialRoute');



axiosSetup();

express.urlencoded({
    extended: true      
})

express.json()

// add Access control header to responce
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/everything', searchRoute);
app.use('/top-headlines', initialRoute);

app.get('/', (req, res)=>{
    res.send("Welcome to new API");
});

//Error handling if nothing matched
app.use(function(req, res, next){
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});


app.listen(process.env.PORT);

