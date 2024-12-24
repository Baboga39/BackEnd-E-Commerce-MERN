// routes/userRoutes.js
const express = require('express');
const controller = require('../controller')
const middleware= require('../middleware')
const router = express.Router();


router.post("/category-product",controller.categoryController.getCategoryWiseProduct)
router.post("/addToCart",middleware.auth,controller.userController.addToCart)
router.get("/countAddToCart",middleware.auth,controller.userController.coundAddCartProduct)
router.get("/cartProduct",middleware.auth,controller.userController.getCartProduct)
router.post("/updateCartProduct",middleware.auth,controller.userController.updateAddToCartProduct)
router.delete("/deleteCartProduct",middleware.auth,controller.userController.deleteAddToCartProduct)


module.exports = router;