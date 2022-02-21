const express = require('express')
const router = express.Router()
const paymentControllers = require('../controllers/payments.controllers')


router.post('/payment/initialize', paymentControllers.createPayment)

router.get('/payment/verify/:payment_ref', paymentControllers.verifyPayment)



module.exports = router