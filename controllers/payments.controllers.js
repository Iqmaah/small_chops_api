require("dotenv").config
const express = require('express')
const Joi = require('joi')
const{v4:uuidv4} = require('uuid')
const paymentService = require("../services/payment.services")
const paymentModel = require('../models/payments.models')
// const msgClass = require('../errors/error')






const createPayment = ((req,res) => {
    const { amount, email } = req.body


    const paymentSchema = Joi.object({
        amount: Joi.string().required(),
        email: Joi.string().email().required(),
        currency: Joi.string()
    })
    const validatePayment = paymentSchema.validate(req.body)
    console.log("i validated")
        if(validatePayment.error) {
            console.log("i didnt validated :", validatePayment.error.details[0].message)
            res.status(400).send({
                status: false,
                message: "Bad Request"
            })
        }
        else{

        paymentService.initializePayment(req.body)
        .then(result => {
            res.status(200).send({
                status: true,
                message: "Transaction successfully initiated",
                data: result.data.data
            })
        })
        .catch(err => {
            res.status(400).send({
                status: false,
                message: err
            })
        })
    }
    

})



const verifyPayment = ((req,res) => {

    const { payment_ref } = req.params


    paymentService.verifyPayment(payment_ref)
    .then(result => {
        res.status(200).send({
            status: true,
             message: "Transaction successfully found",
             data: result.data.data
        })
    })

    .catch(err => {
        console.log("eeeee: ", err)
        res.status(422).send({
            status: false,
            message: err
        })
    })

})



module.exports ={
    createPayment,
    verifyPayment
}