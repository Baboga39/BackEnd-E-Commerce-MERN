const express = require('express')
const authRoute = require('./authRoute')
const adminRoute = require('./adminRoute')  
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')

module.exports = (app)=>{


    /*Auth */ 
    app.use('/api/v1/auth', authRoute);


    /*Admin */ 

    app.use('/api/v1/admin', adminRoute);



    /*User */

    app.use('/api/v1/user', userRoute);

    /*Product */

    app.use('/api/v1/product', productRoute);


}