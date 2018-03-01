'use strict';

const mongoose = require('mongoose');
const ShoppingCart = mongoose.model('ShoppingCarts');
const Location = mongoose.model('Locations');

exports.index = function(req, res) {
  ShoppingCart.find({}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

// exports.create = function(req, res) {
//   let newShoppingCart = new ShoppingCart(req.body);
//   newShoppingCart.save(function(err, item) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(item);
//     }
//   });
// };

exports.create = function(req, res) {
  let params = req.body;
  let locationName = params.location_name;
  let locationId;

  Location.findByName(locationName, function(err, location) {
    if (err) {
      console.log(err);
      res.send('Shopping cart does not exist. Create a new shopping cart or use an existing one.');
    } else {
      locationId = location.id;
      let newShoppingCart = new ShoppingCart();
      newShoppingCart.name = params.name;
      newShoppingCart.amount = params.amount;
      newShoppingCart.location_id = locationId;
      newShoppingCart.save(function(err, shoppingCart) {
        if (err) {
          res.send(err);
        } else {
          res.json(shoppingCart);
        }
      });
    }
  });
};

exports.get = function(req, res) {
  ShoppingCart.findById(req.params.shopping_cart_id, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.update = function(req, res) {
  ShoppingCart.findOneAndUpdate(
    {_id: req.params.shopping_cart_id},
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
  ShoppingCart.remove({_id: req.params.shopping_cart_id}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Item was successfully removed'});
    }
  });
};

