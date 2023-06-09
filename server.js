// The code initializes an Express.js application.
const express = require('express');

// The dotenv package is used to load environment variables from the config.env file.
const dotenv = require('dotenv');

// The morgan package is used for logging HTTP requests.
const morgan = require('morgan');

// The body-parser package is used to parse the request body.
const bodyparser = require("body-parser");

// The path module is used for working with file and directory paths.
const path = require('path');

// The custom connectDB module is imported and used to connect to the MongoDB database.
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8000

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(3002,()=>{console.log(`Server is running on http://localhost:${PORT}`)});






// Static assets (CSS, images, JavaScript) are served using the express.static middleware.
// The router module is loaded and attached to the root URL ("/").
// The view engine is set to EJS.
// The application starts listening for incoming requests.