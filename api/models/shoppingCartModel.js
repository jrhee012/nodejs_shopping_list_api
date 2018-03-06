'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoppingCartSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the shopping cart',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
  },
  location_id: {
    type: String,
  },
});

ShoppingCartSchema.static.findByName = function(name, callback) {
  return this.find({name: name}, callback);
};

module.exports = mongoose.model('ShoppingCarts', ShoppingCartSchema);
