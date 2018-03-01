'use strict';

const mongoose = require('mongoose');
const Location = mongoose.model('Locations');

exports.index = function(req, res) {
  Location.find({}, function(err, location) {
    if (err) {
      res.send(err);
    } else {
      res.json(location);
    }
  });
};

exports.create = function(req, res) {
  let newLocation = new Location(req.body);
  newLocation.save(function(err, location) {
    if (err) {
      res.send(err);
    } else {
      res.json(location);
    }
  });
};

exports.get = function(req, res) {
  Location.findById(req.params.location_id, function(err, location) {
    if (err) {
      res.send(err);
    } else {
      res.json(location);
    }
  });
};

exports.update = function(req, res) {
  Location.findOneAndUpdate(
    {_id: req.params.location_id},
    req.body,
    {new: true},
    function(err, location) {
      if (err) {
        res.send(err);
      } else {
        res.json(location);
      }
    }
  );
};

exports.delete = function(req, res) {
  Location.remove({_id: req.params.location_id}, function(err, location) {
    if (err) {
      res.send(err);
    } else {
      res.json({message: 'Location was successfully removed'});
    }
  });
};

