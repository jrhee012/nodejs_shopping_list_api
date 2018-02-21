'use strict';

module.exports = function(app) {
  let shoppingList = require('../controllers/shoppingListController');

  app.route('/items')
    .get(shoppingList.item_index)
    .post(shoppingList.item_create);

  app.route('/items/:itemId')
    .get(shoppingList.item_get)
    .put(shoppingList.item_update)
    .delete(shoppingList.item_delete);
};
