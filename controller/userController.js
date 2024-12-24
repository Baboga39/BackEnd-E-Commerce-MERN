const cartProduct = require('../models/cartProduct');
const service = require('../services')


const allUser = async(req,res) =>{
    try {
        const listUsers = await service.userService.getAllUsers();
        console.log('Get all users successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Get all users successfully',
            result: listUsers,
        })
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
   }
}


const updateUser = async(req, res) => {
    try {
        const { userId,name,email, role } = req.body;
        const payload = {
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role})
        }
        const updatedUser = await service.userService.updateUser(userId,payload);
        console.log('Update user role successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Update user role successfully',
            result: updatedUser,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}


const uploadProduct = async(req, res) => {
    try {
        const data = req.body;
        const product = await service.productService.uploadProduct(data);
        console.log('Upload product successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Upload product successfully',
            result: product,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}


const addToCart = async (req, res) => {
    try {
        const {productId } = req.body;
        const userId = req.userId;
        const cartItem = await service.cartService.addToCart(userId, productId);
        if(cartItem===0) {
        console.log('Not found user')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Not found user',
            result: 'User not found',
        });}
        if(cartItem===1) {
        console.log('Product already in cart')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Product already in cart',
            result: 'Product already in cart',
        });}
        console.log('Add to cart successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Add to cart successfully',
            result: cartItem,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}
const coundAddCartProduct = async (req, res) => {
    try {
        const userId = req.userId;
        const count = await service.cartService.countAddToCartProduct(userId);
        console.log('Count add to cart product successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Count add to cart product successfully',
            result: count,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}

const getCartProduct = async (req, res) => {
    try {
        const userId = req.userId;
        const cartProduct = await service.cartService.getCartProduct(userId);
        console.log('Get cart product successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Get cart product successfully',
            result: cartProduct,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}

const updateAddToCartProduct = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.userId;
        const cartItem = await service.cartService.updateCartProductQuantity(userId,productId, quantity);
        console.log('Update add to cart product successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Update add to cart product successfully',
            result: cartItem,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}
const deleteAddToCartProduct = async(req, res) => {
    try {
        const { productId } = req.body;
        const cartItem = await service.cartService.deleteCartProduct(productId);
        console.log('Delete add to cart product successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Delete add to cart product successfully',
            result: cartItem,
        });
    } catch (error) {
        console.log(error.message)
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }

}

module.exports = {allUser,
    updateUser,
    addToCart,
    uploadProduct,
    coundAddCartProduct,
    getCartProduct,
    updateAddToCartProduct,
    deleteAddToCartProduct,
};