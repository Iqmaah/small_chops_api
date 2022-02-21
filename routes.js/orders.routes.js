const express = require('express')
const router = express.Router()
const orderControllers = require('../controllers.js/orders.controllers')


router.get('/order/categories', orderControllers.getOrders)

router.post('/order/purchases', orderControllers.calculateOrders)



module.exports = router