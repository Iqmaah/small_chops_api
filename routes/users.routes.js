const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controllers')

router.post('/signup', userController.createNewUser )
router.post('/login/:email', userController.userLogin)
router.get('/user/:customer_id', userController.getUser)
router.get('/allUsers', userController.getAllUsers)
// router.patch('/update/:email', userController.updateUser)





module.exports = router
