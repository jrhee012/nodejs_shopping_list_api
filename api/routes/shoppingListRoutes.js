'use strict';

module.exports = function(app) {
  let itemList = require('../controllers/shoppingListController');

  app.route('/items')
    .get(itemList.index)
    .post(itemList.create);

  app.route('/items/:itemId')
    .get(itemList.get)
    .put(itemList.update)
    .delete(itemList.delete);
};
