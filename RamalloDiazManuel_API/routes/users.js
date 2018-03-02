const express = require('express');
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');
let router = express.Router();


router.post('/register', userController.signUp);
router.post('/login', userController.signIn);
router.get('/list', auth.isAuth, userController.list);



module.exports = router;
