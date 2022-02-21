const express = require('express')
const router = express.Router()
const packagesControllers = require('../controllers/packages.controllers')



router.post('/packages', packagesControllers.createNewPackage)
router.get('/allPackages/:', packagesControllers.getAllPackages)
router.get('/onePackage/:package_id', packagesControllers.getPackage)
router.put('/onePackage/:package_id', packagesControllers.updatePackage)




module.exports = router