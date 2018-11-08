const express = require("express");
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get('/', function(req, res) {
        console.log(__dirname);
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

    app.get('/', function(req, res) {
      console.log(__dirname);
    res.sendFile(path.join(__dirname, '/../public/contact.html'));
  });
  app.get('/', function(req, res) {
    console.log(__dirname);
  res.sendFile(path.join(__dirname, '/../public/family.html'));
});
app.get('/', function(req, res) {
  console.log(__dirname);
res.sendFile(path.join(__dirname, '/../public/store.html'));
});


  
   
    
  };