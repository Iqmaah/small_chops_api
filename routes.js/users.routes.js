const express = require('express')
const router = express.Router()
const userController = require('../controllers.js/users.controllers')

router.post('/signup', userController.createNewUser )
router.get('/login/:email', userController.userLogin)
router.get('/user/:customer_id', userController.getUser)
router.get('/allUsers', userController.getAllUsers)
router.put('/update', userController.updateUser)





module.exports = router
