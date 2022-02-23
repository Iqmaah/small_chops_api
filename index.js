require("dotenv").config
const express = require('express')
const app = express()
const{v4:uuidv4} = require ('uuid')
const bodyParser = require ("body-parser")
const displayRoutes = require('express-routemap')
const mySqlConnection = require('./config/mysql')
const userRoutes = require('./routes/users.routes')
const paymentRoutes = require('./routes/payment.routes')
const packageRoutes = require('./routes/packages.routes')
const orderRoutes = require('./routes/orders.routes')
const morgan = require('morgan')


const port = process.env.PORT
app.use(bodyParser.json())

app.use(morgan('combined'))
app.use(userRoutes)
app.use(paymentRoutes)
app.use(packageRoutes)
app.use(orderRoutes)

app.listen(port, () => {
    console.log(`listeneing on ${port}`)
    displayRoutes(app)
})

mySqlConnection.connect(err => {
    if (err) throw err.stack
    console.log('successfully connected:' , mySqlConnection.threadId)

})



