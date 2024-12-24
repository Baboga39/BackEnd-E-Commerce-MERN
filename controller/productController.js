const service = require('../services')
const getProdcuctDetails = async (req, res) => {
    try {
        const { productId } = req.body || req?.query;
        const categories = await service.productService.getProductDetails(productId);
        console.log('Get product detail successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Get product details successfully',
            result: categories,
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

const searchProducts = async(req, res) => {
    try {
        const { query } = req.body || req?.query;
        const products = await service.productService.searchProducts(query);
        console.log('Search products successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Search products successfully',
            result: products,
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


const filterProduct= async (req, res) => {
    try {
        const { category } = req.body || req?.query;
        const products = await service.productService.filterProduct(category);
        console.log('Filter products successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Filter products successfully',
            result: products,
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

module.exports = {
    getProdcuctDetails,
    searchProducts,
    filterProduct
}