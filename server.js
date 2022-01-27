/**
 * Importing packages
 */
 const express = require('express');
 const mongoose = require('mongoose');
 
 // Import routes from routes/index.js
 const router = require('./routes');
 
 // Initialize express
 const app = express();
 
 // Parses the json data from request body
 app.use(express.json());
 
 // Parses the query params from request url
 app.use(express.urlencoded({ extended: true }));
 
 // Uses imported routes in express
 app.use('/', router);
 

 //Establishes connection to the database
 mongoose.connect('mongodb://localhost:27017/mydb')
   .then(() => {
       console.log('Database connected');
   })
   .catch((err) => {
       console.log(err);
   });
 
 // Listen web requests on 3000 port
const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log('App listening on port http://localhost:'+ port);
 });