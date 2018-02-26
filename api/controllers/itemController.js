'use strict';

const mongoose = require('mongoose');
const Item = mongoose.model('Items');

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
  let newItem = new Item(req.body);
  newItem.save(function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.get = function(req, res) {
  Item.findById(req.params.itemId, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
  });
};

exports.update = function(req, res) {
  Item.findOneAndUpdate(
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
  Item.remove({_id: req.params.itemId}, function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Item was successfully removed'});
    }
  });
};

