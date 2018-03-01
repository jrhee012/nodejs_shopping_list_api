'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the shopping cart',
  },
  address: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
  },
});

LocationSchema.static.findByName = function(name, callback) {
  return this.find({name: name}, callback);
};

module.exports = mongoose.model('Locations', LocationSchema);
