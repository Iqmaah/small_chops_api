require("dotenv").config
// const express = require('express')
const Joi = require('Joi')
const{ v4: uuidv4 } = require('uuid')
const userModel = require('../models/users.models')
const msgClass = require('../errors/error')







const createNewUser = async (req,res) => {
    const{ fullname, email, phone_number, address, password } = req.body
    const customer_id = uuidv4()

    const userSchema = Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().email().required(),
        phone_number: Joi.string().required(),
        address: Joi.string().required(),
        password: Joi.string().alphanum().required(),
    })

    const validateUser = userSchema.validate(req.body)
    console.log('i validated')
    if (validateUser.error) {
        res.status(422).send({
            status:false,
            message: "Bad Request",
            data: []
        })
    }
    console.log("got here 1")

    userModel.checkUser(email,phone_number)   
    .then(checkUserResult => {
        if (checkUserResult != ""){
            throw new Error(msgClass.CustomerExist)
        }

        return userModel.newUser(fullname, email, phone_number, address, password, customer_id)
    })
    .then(newUserResult => {
        if(newUserResult) {
        res.status(200).send({
            status:true,
            message: "customer successfully created",
            data: []
        })
    }
    })  
        
    
    .catch(checkUserErr => {
        console.log("here:", checkUserErr)
        res.status(400).send({
            status:false,
            message:  checkUserErr.message || msgClass.GeneralError,
            response: []
        })
    })
}



const userLogin = ((req,res) => {

})



const getUser = ((req,res) => {

})



const getAllUsers = ((req,res) => {

})



// const updateUser = (req,res) => {
//     const {address,email} = req.body

//     const updateUserSchema = Joi.object({
//         address: Joi.string().required(),
//         email: Joi.string().email().required(),
//     })
//     const validateUserUpdate = updateUserSchema.validate(req.body)
//     if(validateUserUpdate.error){
//         res.status(400).send({
//             status: false,
//             message: "Bad request",
//             data:[]
//         })
//     }

//     userModel.updatingUser(address,email)
//     .then(result => {
//         res.status(200).send({
//             status: true,
//             message: "success",
//             data: result
//         }) 
//     })

//     .catch(err => {
//     console.log(`error happened: `, err)
//     res.status(422).send({
//             status:false,
//             message: err
//         })
//     })
// }






module.exports = {
    createNewUser,
    userLogin,
    getUser,
    getAllUsers,
    // updateUser
}