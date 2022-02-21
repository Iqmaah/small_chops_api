const express = require('express')
const router = express.Router()
const orderControllers = require('../controllers/orders.controllers')


router.get('/order/categories', orderControllers.getOrders)

router.post('/order/purchases', orderControllers.calculateOrders)



module.exports = router