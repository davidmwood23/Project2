const express = require("express");
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get('/index', function(req, res) {
        console.log(__dirname);
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

  
    // If no matching route is found default to home
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '/../public/index.html'));
    });
  };