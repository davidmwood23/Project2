const express = require("express");
const router = express.Router();
const db = require('../models');


router.get('/api/pets', function(req,res){
  db.Pets.findAll({}).then(function(response,error){
    if(error){
      res.json(error);
    }
    res.json(response);
  })
})

router.get('/api/pets/:id', function(req,res){
    db.Pets.findAll({where: {id: req.params.id}}).then(function(response,error){
      if(error){
        res.json(error);
      }
      res.json(response);
    })
  })
  router.post('/api/pets', function(req,res){
    db.Pets.create(req.body)
    .then(function(response,error){
      if(error)
      res.json(response);
    });
})


//GET route for specified pet
router.get('/api/pets/:id', function (req, res) {
    db.Pets.find({ where: { id: req.params.id } })
    .then(function (response, error)  {
        res.json(response)
    
    });
});

//PUT request
router.put('/api/pets/:id', function (req, res) {
    db.Pets.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(function (response) {
        res.json({ success: true });
        console.log("hello world");
    });
});

//DELETE request
router.delete('/api/pets/:id', function (req, res) {
    db.Pets.destroy({ where: { id: req.params.id } })
    .then(function ()  {
        res.json( {success: true});
    
    });
});


 module.exports = router