const User = require('../models/users');

const userCtrl = {};

userCtrl.getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users);
};
userCtrl.getUser = async(req,res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};
userCtrl.createUser = async (req,res) =>{
    const user = new User({
        name: req.body.name,
        subname: req.body.subname,
        DNI: req.body.DNI,
        direction: req.body.direction,
        email: req.body.email,
        CP: req.body.CP,
        role: 'ROLE_USER',
        telephone: req.body.telephone
    });
    await user.save();
    res.json({
        'status':'User save'
    });
};
userCtrl.editUser = async(req,res) => {
    const {id} = req.params;
    const user = {
        name: req.body.name,
        subname: req.body.subname,
        DNI: req.body.DNI,
        direction: req.body.direction,
        email: req.body.email,
        CP: req.body.CP,
        role: req.body.role,
        telephone: req.body.telephone
    };
    await User.findByIdAndUpdate(id,{$set:user}, {new:true});
    res.json({status: "Product update"});
};
userCtrl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({status:"User deleted"});
};

module.exports = userCtrl;