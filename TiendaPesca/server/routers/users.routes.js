const express = require ('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controllers');

router.get('/' , userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;