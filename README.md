# Backend service for UK NEWS APP

## Endpoints exposed 

    1. everything/
        methods : get
        params :    q         :contains string or keyword to search
                    pageSize  :default 5 provided
                    page      :pass the page number to be fetched

    2. top-headlines/
        methods : get
        params :  pageSize  :default 5 provided
                    fixed param country with value gb passed
        rout called on initial load

## To run the application 
     1. npm init 
     2. Add .env file with following content
            PORT=3002
            API_KEY=_____ YOUR API KEY _______
            BASE_URL=https://newsapi.org/v2
            ENDPOINT_EVERY = everything
            ENDPOINT_INIT = top-headlines
     3. run npm start

## Folder Structure of repo 

this repo contains app.js as entry point
than a routes folder containing all the routes
.env file with env variables
axiosConfig file with default header configuration
and a constant file with all the constants to be used

## Dependencies 
    axios
    body-parser
    dotenv
    express
    qs






        
