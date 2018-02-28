'use strict';

module.exports = function(app) {
  let itemList = require('../controllers/itemController');
  let shoppingCart = require('../controllers/shoppingCartController');

  app.route('/items')
    .get(itemList.index)
    .post(itemList.create);

  app.route('/items/:itemId')
    .get(itemList.get)
    .put(itemList.update)
    .delete(itemList.delete);

  app.route('/shopping_carts')
     .get(shoppingCart.index)
     .post(shoppingCart.create);

  app.route('/shopping_carts/:shoppingCartId')
     .get(shoppingCart.get)
     .put(shoppingCart.update)
     .delete(shoppingCart.delete);
};
