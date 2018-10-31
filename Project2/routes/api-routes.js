const express = require("express");
const router = express.Router();
const db = require('../models');

module.exports = function(router) {

router.get('/api/products', function(req,res){
  db.Product.findAll({}).then(function(response,error){
    if(error){
      res.json(error);
    }
    res.json(response);
  })
})
  router.post('/api/products', function(req,res){
    db.Product.create(req.body)
    .then(function(response,error){
      if(error)
      res.json(response);
    });
})


//GET route for specified pet
app.get('/api/pets/:id', function (req, res) {
    db.Product.find({ where: { id: req.params.id } })
    .then(function (data)  {
        res.json(data)
    
    });
});

//PUT request
app.put('/api/pets/:id', function (req, res) {
    db.Product.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(function (response) {
        res.json({ success: true });
    
    });
});

//DELETE request
app.delete('/api/pets/:id', function (req, res) {
    db.Product.destroy({ where: { id: req.params.id } })
    .then(function ()  {
        res.json( {success: true});
    
    });
});

};

// module.exports = router