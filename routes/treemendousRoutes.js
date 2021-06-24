const {addUser, getAllUsers, getUser,updateUser,deleteUser} = require('../controller/userController');
const router = require('express').Router();

router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = {
    routes: router
}