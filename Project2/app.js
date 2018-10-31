const path = require("path");
const express = require("express");
const app = express();
//const apiRoutes = 
// Defines a PORT for the server to listen for requests..this assigns a port to us
const PORT = process.env.PORT || 8080;
//require routes
//const htmlRoutes = require ("./app/routing/htmlRoutes.js")
app.use(express.static("app/public"))
app.use(express.urlencoded({ extend: true }));
app.use(express.json())
//require routes 
require('./routes/html-Routes.js')(app);
// Starts our server on the predefined PORT...to remind us what port the app is running on
app.listen(PORT, function () {
  console.log(`App is now listening on PORT ${PORT}`)
})