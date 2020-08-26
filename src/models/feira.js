'use strict';

var mongoose = require('mongoose');

// Create the Schema
var feiraSchema = new mongoose.Schema({
  city: String,
  neighborhood: String,
  street: String,
  latitude: Number,
  longitude: Number,
  weekdays: String,
  categories: [String]
});

// Build the Model
var model = mongoose.model('Feira', feiraSchema);

// Export the Model
module.exports = model;