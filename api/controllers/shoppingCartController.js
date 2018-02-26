'use strict';

const mongoose = require('mongoose');
const ShoppingCart = mongoose.model('ShoppingCarts');

exports.index = function(req, res) {
  ShoppingCart.find({}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.create = function(req, res) {
  let newShoppingCart = new ShoppingCart(req.body);
  newShoppingCart.save(function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.get = function(req, res) {
  ShoppingCart.findById(req.params.itemId, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.update = function(req, res) {
  ShoppingCart.findOneAndUpdate(
    {_id: req.params.itemId},
    req.body,
    {new: true},
    function(err, item) {
      if (err) {
        res.send(err);
      } else {
        res.json(item);
      }
    }
  );
};

exports.delete = function(req, res) {
  ShoppingCart.remove({_id: req.params.itemId}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Item was successfully removed'});
    }
  });
};

