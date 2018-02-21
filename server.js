const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Item = require('./api/models/shoppingListModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShoppingListdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/shoppingListRoutes');
routes(app);

app.listen(port);

console.log('shopping list RESTful API server started on: ' + port);
