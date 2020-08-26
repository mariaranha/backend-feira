'use strict';

// Import Express
var express = require('express');
var Feira = require('../models/feira');

// Create a Router to prevent namespace collisions
var router = express.Router();

/*
  API ROUTES
*/
// NOTE: GET Route - fetches ALL feiras
router.get('/feiras', function(request, response){

  // query directly from the model Todo object.
  Feira.find({}, function(err, feiras){

    if(err) {
      return response.status(500).json({message: err.message});
    }
    response.json({feiras: feiras});
  });

});

// NOTE: POST Route - adds a feira to the database
router.post('/post', function(request, response){
  var feira = request.body;

  Feira.create(feira, function(err, feira){
    if(err) {
      return response.status(500).json({err: err.message});
    }

    response.json({'feira': feira, message: 'Feira Created'});
  })
});

module.exports = router;