const express = require ('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controllers');
const md_auth = require('../middleware/authenticated');



router.get('/' , userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);


module.exports = router;