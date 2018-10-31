const express = require('express');
const path= ('path');
const db = require('../products/models');
module.exports = function (app) {
  // API Requests 
  // GET Request
  router.get('/api/products', function (req, res) {
    db.products.findAll({}).then(function(response, error){
        if(error){
            res.json(error);
        }
    res.json(response);
    })

  })

router.post('/api/products', function (req,res) {
    db.products.create(req.body)
    .then(function(response, error){
        if(error){
            res.json(error);
        }
    res.json(response)
    })
})

router.get("/api/products/:id", function(req,res){
    db.Products.findOne({where:{id:req.params.id}}).then(function(response, error){

        
})


    module.exports = router;}