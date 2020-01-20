const mongoose = require('mongoose');
const { Shema } = mongoose;

const ProductsShema = new Shema ({
    name: {type:String, require:true},
    brand: {type:String, require:true},
    description: {type:String, require:false},
    cash: {type:Number, require:true}
});

module.exports = mongoose.model('Products', ProductsShema);