const Product = require('../models/products');

const productCtrl = {};

productCtrl.getProducts = async(req,res) =>{
    const products = await Product.find();
    res.json(products);
};
productCtrl.getProduct = async(req,res) =>{
    const product = await Product.findById(req.params.id);
    res.json(product);
};
productCtrl.createProduct = async(req,res) =>{
    const product = new Product(req.body);
    await product.save();
    res.json({
        'status':'Product save'
    });
};
productCtrl.editProduct = async(req,res) =>{

};
productCtrl.deleteProduct = async(req,res) =>{

};

module.exports = productCtrl;