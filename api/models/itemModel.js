'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the item',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    default: 1,
  },
  shopping_cart_id: {
    type: String,
  },
});

module.exports = mongoose.model('Items', ItemSchema);
