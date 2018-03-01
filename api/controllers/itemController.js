'use strict';

const mongoose = require('mongoose');
const Item = mongoose.model('Items');
const ShoppingCart = mongoose.model('ShoppingCarts');

exports.index = function(req, res) {
  Item.find({}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.create = function(req, res) {
  let params = req.body;
  let shoppingCartName = params.shopping_cart_name;
  let shoppingCartId;

  ShoppingCart.findByName(shoppingCartName, function(err, shoppingCart) {
    if (err) {
      console.log(err);
      res.send('Shopping cart does not exist. Create a new shopping cart or use an existing one.');
    } else {
      shoppingCartId = shoppingCart.id;
      let newItem = new Item();
      newItem.name = params.name;
      newItem.amount = params.amount;
      newItem.shopping_cart_id = shoppingCartId;
      newItem.save(function(err, item) {
        if (err) {
          res.send(err);
        } else {
          res.json(item);
        }
      });
    }
  });
};

exports.get = function(req, res) {
  Item.findById(req.params.item_id, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.update = function(req, res) {
  Item.findOneAndUpdate(
    {_id: req.params.item_id},
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
  Item.remove({_id: req.params.item_id}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Item was successfully removed'});
    }
  });
};

