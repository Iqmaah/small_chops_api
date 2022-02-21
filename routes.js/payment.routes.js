const express = require('express')
const router = express.Router()
const paymentControllers = require('../controllers.js/payments.controllers')


router.post('/payment/initialize', paymentControllers.createPayment)

router.get('/payment/verify/:payment_ref', paymentControllers.verifyPayment)