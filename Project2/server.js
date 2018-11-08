const path = require("path");
const express = require("express");
const sequelize = require("sequelize");
const app = express();
const db = require("./models");
//const apiRoutes = 
// Defines a PORT for the server to listen for requests..this assigns a port to us
const PORT = process.env.PORT || 8080;
//require routes
//const htmlRoutes = require ("./app/routing/htmlRoutes.js")
app.use(express.static("public"))
app.use(express.urlencoded({ extend: true }));
app.use(express.json())
//require routes 

require('./routes/html-Routes.js')(app)
const apiRoutes = require("./routes/api-routes.js")
app.use(apiRoutes);

// Starts our server on the predefined PORT...to remind us what port the app is running 
db.sequelize.sync({}).then(function(){
  //server listener
  app.listen(PORT, function(){
      console.log(`App is listening on ${PORT}`)
  }) 
  });