const axios = require('axios');
require('dotenv').config();

//import qs from 'qs';

const axiosDefault = axios.create();

const axiosSetup = () => {

    // Axios Default config to be added to every request which we are sending.
    axiosDefault.defaults.baseURL = process.env.BASE_URL;
    axiosDefault.defaults.headers.common['Content-type'] = 'application/json';
    axiosDefault.defaults.headers.common['X-Api-Key'] = process.env.API_KEY;
    // axiosDefault.defaults.paramsSerializer = params =>
    //     qs.stringify(params, {
    //       arrayFormat: 'brackets',
    //       encode: false
    //     });

};

module.exports = {
    axios : axiosDefault,
    axiosSetup: axiosSetup
}