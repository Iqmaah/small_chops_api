const express = require('express')
const router = express.Router()
const packagesControllers = require('../controllers/packages.controllers')



router.post('/packages', packagesControllers.createNewPackage)
router.get('/all-Packages/', packagesControllers.getAllPackages)
router.get('/one-Package/:package_id', packagesControllers.getPackage)
router.put('/one-Package/:package_id/:item_name', packagesControllers.updatePackage)




module.exports = router