const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./products');
const Client = require('./users');

const OrdersShema = new Schema ({
   idProductsList: {type:Array(String) , require:true},
   orderNumber: {type:Number , require:true},
   idClient: {type: String , require:true},
   sendDirection: {type:String , require:true}
});

module.exports = mongoose.model('Order', OrdersShema);
