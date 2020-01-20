const mongoose = require('mongoose');
const { Shema } = mongoose;

const ProductsShema = new Shema ({
    name: {type:String, require:true},
    marca: {type:String, require:true},
    descripcion: {type:String, require:false},
    precio: {type:Number, require:true}
});

module.exports = mongoose.model('Products', ProductsShema);