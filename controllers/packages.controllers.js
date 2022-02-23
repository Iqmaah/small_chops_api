require("dotenv").config
const express = require('express')
const Joi = require('joi')
const{v4:uuidv4} = require('uuid')
const packageModel = require('../models/packages.models')
const msgClass = require('../errors/error')




const createNewPackage = async(req,res) => {
    const {item_name, price, quantity_in_stock} = req.body
    const package_id = uuidv4()

   const packageSchema = Joi.object({
        item_name: Joi.string().required(),
        price: Joi.string().required(),
        quantity_in_stock: Joi.string().required()
    })

    // const { value, error } = Joi.validate(req.body, packageSchema );
    const validatePackage = packageSchema.validate(req.body)
    // console.log('i validated' , validatePackage.error)
    if (validatePackage.error) {
        res.status(422).send({
            status:false,
            message: "Bad Request",
            data: []
        })
    
    }else{
    packageModel.newPackage(item_name, price, quantity_in_stock, package_id)
    .then(result => {
        res.status(200).send({
                        status: true,
                        message: "success",
                        data: result
            }) 
    })
    .catch(err => {
        console.log(`error happened: `, err)
        res.status(422).send({
                        status:false,
                        message: err
                    })
    })
    }
         
}


const getAllPackages = ((req,res) => {
    // const {page} = parseInt(req.params) 

    packageModel.listAllPackages()
    .then(result => {
        res.status(200).send({
                        status: true,
                        message: "success",
                        data:result
            }) 
    })
    .catch(err => {
        console.log(`error happened: `, err)
        res.status(422).send({
                        status:false,
                        message: err
                    })
    })
})



const getPackage = ((req,res) => {
    const { package_id } = req.params

    packageModel.fetchAPackage(package_id)
    .then(result => {
        res.status(200).send({
                        status: true,
                        message: "success",
                        data: result
            }) 
    })
    .catch(err => {
        console.log(`error happened: `, err)
        res.status(422).send({
                        status:false,
                        message: err
                    })
    })

})



const updatePackage = ((req,res) => {
    const{package_id, item_name} = req.body

    const packageSchema = Joi.object({
        package_id: Joi.string().required(),
        item_name: Joi.string().required(),
    })

    const validateUpdate = packagesSchema.validate(req.body)
    console.log('i validated')
    if (validateUser.error) {
        res.status(422).send({
            status:false,
            message: "Bad Request",
            data: []
        })
    }

    packageModel.updatePackageStatus(package_id,item_name)
    .then(result => {
        res.status(200).send({
                        status: true,
                        message: "success",
                        data: result
            }) 
    })
    .catch(err => {
        console.log(`error happened: `, err)
        res.status(422).send({
                        status:false,
                        message: err
                    })
    })

})









module.exports = {
    createNewPackage,
    getAllPackages,
    getPackage,
    updatePackage
}